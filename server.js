const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const sensorDataSchema = require("./SensorDataSchema.js");
const morgan = require("morgan");
app.use(morgan("dev"));
dotenv.config();

app.use(cors());
app.use(express.json());
require("./db.js");

app.post("/api/posts", (req, res) => {
  console.log("POST API HIT!");
  console.log(req.body);
  const data = new sensorDataSchema({
    temperature: req.body.temperature,
    humidity: req.body.humidity,
  });
  console.log(data)
  try{
    data.save()
    res.status(200).json({
      success: true,
      message: "true",
    });
  }catch(err){
    res.status(500).json({error:"UNexpected error occured"})
  }
});

app.listen(process.env.PORT, () =>
  console.log(`\nServer running on port ${process.env.PORT}\n\n`)
);
