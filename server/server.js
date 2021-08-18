const express = require("express");
const cors = require("cors");
const ctrl = require("./controller/controller.js");

const app = express();

app.use(express.static("public"));
const path = require("path");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public"));
});

app.get("/api/getwords/:id", ctrl.getWords);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`You are running server on port ${port}`);
});
