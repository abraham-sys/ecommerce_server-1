const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.post("/register", UserController.registerCustomer);
router.post("/loginAdmin", UserController.loginAdmin);
router.post("/loginCustomer", UserController.loginCustomer);

module.exports = router;
