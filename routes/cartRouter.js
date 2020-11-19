const express = require("express");
const router = express.Router();
const CartController = require("../controllers/CartController");
const Middleware = require("../middlewares/middleware");

router.get("/", Middleware.customerAuth, CartController.allCart);
router.post("/", Middleware.customerAuth, CartController.addCart);
router.put("/:id", Middleware.customerAuth, CartController.updateCart);
router.delete(
"/:id", Middleware.customerAuth,
  CartController.deleteCart
);

module.exports = router;
