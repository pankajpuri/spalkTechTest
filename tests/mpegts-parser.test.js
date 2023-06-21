const mpegparser = require("../mpegts-parser");
const fs = require("fs");
const path = require("path");

describe("parseMPEGTS", () => {
  it("should return lists of all the uqine PIDs present in the stream in asceding order in hex", () => {
    const expectedResult = [
      "0x0",
      "0x11",
      "0x20",
      "0x21",
      "0x22",
      "0x23",
      "0x24",
      "0x25",
      "0x1FFF",
    ];
    const data = fs.readFileSync(
      path.resolve(__dirname, "..", "files", "test_success.ts")
    );
    const result = mpegparser(data);
    expect(
      result.getPacketIDs().map((pid) => `0x${pid.toString(16).toUpperCase()}`)
    ).toEqual(expect.arrayContaining(expectedResult));
  });

  it("should return error message with packet and offset value. ", () => {
    const data = fs.readFileSync(
      path.resolve(__dirname, "..", "files", "test_failure.ts")
    );
    const expectedResult = {
      packet: 20535,
      offset: 20536,
    };
    const result = mpegparser(data);
    const errors = result.errors[0];

    expect({ packet: errors.index, offset: errors.offset }).toMatchObject(
      expectedResult
    );
  });
});
