const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
app.use(morgan("dev"));
dotenv.config();

app.use(cors());
app.use(express.json());
require("./db.js");

app.post("/api/posts", (req, res) => {
  console.log("POST API HIT!");
  console.log(req.body);
  res.status(200).json({
    success: true,
    message: "true",
  });
});

app.get("/test", (req, res) => {
  console.log("GET API HIT");
  res.status(200).json({
    success: true,
  });
});

app.listen(process.env.PORT, () =>
  console.log(`\nServer running on port ${process.env.PORT}\n\n`)
);
// mongoose.connection.once("open", () => {
//   });
