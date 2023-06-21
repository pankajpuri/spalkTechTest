class MpegtsParser {
  constructor() {
    this.packetSize = 188;
    this.syncByte = 0x47;
    this.packets = []; //store parsed packetIDs
    this.pids = new Set(); // stored unique packetIDs
    this.errors = [];
    this.index = 0;
    this.offset = 0;
    this.firstPacketComplete = false; // flag to indicate if the first packet is complete
  }

  parse(data) {
    for (let i = 0; i < data.length; i++) {
      const byte = data[i];

      if (!this.firstPacketComplete) {
        if (byte !== this.syncByte) continue;
        this.firstPacketComplete = true;
      }

      this.offset++;

      const packetData = data.slice(i, i + this.packetSize);

      this.parsePacket(packetData);

      this.index++;
      i += this.packetSize - 1;
    }
  }
  parsePacket(packetData) {
    if (packetData[0] !== this.syncByte) {
      this.errors.push({ index: this.index, offset: this.offset });
      return;
    }
    const pid = ((packetData[1] & 0x1f) << 8) | packetData[2];
    this.packets.push(pid);
    this.pids.add(pid);
  }

  printErrors() {
    for (const error of this.errors) {
      console.error(
        `Error: No sync byte present in packet ${erro.index}, offset ${error.offset}`
      );
    }
  }
  printPids() {
    const sortedPids = Array.from(this.pids).sort((a, b) => a - b);
    for (const pid of sortedPids) {
      console.log(`0x${pid.toString(16).toUpperCase()}`);
    }
  }
  run() {
    const chunks = [];
    process.stdin.on("data", (chunk) => {
      chunks.push(chunk);
    });
    process.stdin.on("end", () => {
      const data = Buffer.concat(chunks);
      this.parse(data);

      if (this.errors.length > 0) {
        this.printErrors();
        process.exit(1);
      } else {
        this.printPids();
        process.exit(0);
      }
    });
  }
}
const parser = new MpegtsParser();
parser.run();
module.exports = MpegtsParser;
