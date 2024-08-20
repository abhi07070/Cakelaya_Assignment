const mongoose = require("mongoose");

const OrdersByCitySchema = new mongoose.Schema({
  city: { type: String, required: true },
  orders: { type: Number, required: true },
});

module.exports = mongoose.model("OrdersByCity", OrdersByCitySchema);
