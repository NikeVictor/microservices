const express = require('express');
const router = express.Router();
const customerController = require("../controller/customerController");

router.post("/register", customerController.signup);
router.get("/customer/:customerId", customerController.getCustomer);
router.get("/customers", customerController.getCustomer);
router.put("/update/:customerId", customerController.updateCustomer);
router.delete("/customer/customerId", customerController.deleteCustomer);

module.exports = router;