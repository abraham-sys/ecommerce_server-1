const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");
const Middleware = require("../middlewares/middleware");

router.get("/", ProductController.allProduct);
router.post("/", Middleware.adminAuth, ProductController.addProduct);
router.get("/:id", Middleware.adminAuth, ProductController.getOneProduct);
router.put("/:id", Middleware.adminAuth, ProductController.updateProduct);
router.delete(
  "/:id", Middleware.adminAuth,
  ProductController.deleteProduct
);

module.exports = router;
