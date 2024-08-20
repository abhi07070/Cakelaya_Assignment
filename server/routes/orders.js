const express = require("express");
const OrdersByCity = require("../models/OrdersByCity");
const OrdersByMonth = require("../models/OrdersByMonth");

const router = express.Router();

router.get("/ordersByCity", async (req, res) => {
  try {
    const orders = await OrdersByCity.find();
    return res.json(orders);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

router.get("/ordersByMonth", async (req, res) => {
  try {
    const orders = await OrdersByMonth.find();
    return res.json(orders);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
