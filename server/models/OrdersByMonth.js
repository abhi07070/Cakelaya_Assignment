const mongoose = require("mongoose");

const OrdersByMonthSchema = new mongoose.Schema({
  month: { type: String, required: true },
  year: { type: Number, required: true },
  orders: { type: Number, required: true },
});

module.exports = mongoose.model("OrdersByMonth", OrdersByMonthSchema);
