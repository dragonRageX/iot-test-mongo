const mongoose = require("mongoose");

const sensorDataSchema = new mongoose.Schema({
    temperature: {
        type: Number,
    },
    humidity: {
        type: Number,
    },
}, { timestamps: true }
);

module.exports = mongoose.model("SensorData", sensorDataSchema);

