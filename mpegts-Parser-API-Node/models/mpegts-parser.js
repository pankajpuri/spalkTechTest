function parseMPEGTS(data) {
  const packetSize = 188; // Size of each TS packet in bytes
  const syncByte = 0x47; // Sync byte indicating the start of a packet
  const packets = []; // Array to store parsed packet IDs
  const errors = []; // Array to store error information
  const pids = new Set(); // Set to store unique PIDs
  let index = 0; // Index of the current packet being processed
  let offset = 0; // Byte offset within the input stream
  let firstPacketComplete = false; // Flag indicating if the first packet is complete

  for (let i = 0; i < data.length; i++) {
    const byte = data[i];

    // If the first packet is not complete, continue until a sync byte is found
    if (!firstPacketComplete) {
      if (byte !== syncByte) {
        continue;
      }

      firstPacketComplete = true;
    }
    offset++;
    const packetData = data.slice(i, i + packetSize);
    parsePacket(packetData);
    index++;
    i += packetSize - 1;
  }

  function parsePacket(packetData) {
    if (packetData[0] !== syncByte) {
      // If the sync byte is missing, record an error
      errors.push({ index, offset });
      return;
    }

    const pid = ((packetData[1] & 0x1f) << 8) | packetData[2];
    packets.push(pid);
    pids.add(pid);
  }

  function getPacketIDs() {
    return Array.from(pids).sort((a, b) => a - b);
  }

  return {
    errors,
    offset,
    index,
    getPacketIDs,
  };
}

function runParser() {
  const chunks = [];
  process.stdin.on("data", (chunk) => {
    chunks.push(chunk);
  });

  process.stdin.on("end", () => {
    const data = Buffer.concat(chunks);
    const result = parseMPEGTS(data);

    if (result.errors.length > 0) {
      result.errors.forEach((error) => {
        console.error(
          `Error: No sync byte present in packet ${error.index}, offset ${error.offset}`
        );
      });
      process.exit(1);
    } else {
      result.getPacketIDs().forEach((pid) => {
        console.log(`0x${pid.toString(16).toUpperCase()}`);
      });
      process.exit(0);
    }
  });
}

runParser();

module.exports = parseMPEGTS;
