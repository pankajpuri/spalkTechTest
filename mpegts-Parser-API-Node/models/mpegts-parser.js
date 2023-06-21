function parseMPEGTS(data) {
  const packetSize = 188;
  const syncByte = 0x47;
  const packets = [];
  const errors = [];
  const pids = new Set();
  let index = 0;
  let offset = 0;
  let firstPacketComplete = false;

  for (let i = 0; i < data.length; i++) {
    const byte = data[i];

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
