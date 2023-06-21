const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const mpegParserRouter = require("./routers/mpegts-parsers");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Configure file upload middleware
app.use(
  fileUpload({
    limits: { fileSize: 100 * 1024 * 1024 }, // 10MB file size limit (adjust as needed)
  })
);
app.use("/api/mpegparser", mpegParserRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
