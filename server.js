const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
