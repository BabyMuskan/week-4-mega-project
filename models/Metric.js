const mongoose = require("mongoose");

const metricSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Metric", metricSchema);