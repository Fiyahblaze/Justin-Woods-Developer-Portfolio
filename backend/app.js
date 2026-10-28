const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Justin Woods Portfolio API is running",
  });
});

module.exports = app;