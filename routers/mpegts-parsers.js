const express = require("express");
const parseMPEGTS = require("../models/mpegts-parser");
const router = express.Router();

router.post("/", async (req, res) => {
  if (!req.files || (!req.files.undefined && !req.files.file)) {
    return res.status(400).json({ error: "No file provided" });
  }

  // Choose the correct file based on which one exists
  const file = req.files.undefined ? req.files.undefined : req.files.file;

  const fileData = file.data;
  const result = await parseMPEGTS(fileData);

  if (result.errors.length > 0) {
    const error = result.errors[0]; // Assuming you want to display the first error
    return res.status(400).json({
      error: `Error: No sync byte present in packet ${error.index}, offset ${error.offset}`,
    });
  } else {
    const packetIds = result
      .getPacketIDs()
      .map((pid) => `0x${pid.toString(16).toUpperCase()}`);
    return res.status(200).json({ packetIds });
  }
});

module.exports = router;
