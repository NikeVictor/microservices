const express = require('express');
const router = express.Router();
const orderController = require("../controller/orderController");

router.post("/placeorder", orderController.makeOrder);
router.get("/order/:orderId", orderController.getOrder);
router.get("/orders", orderController.getOrders);

module.exports = router;