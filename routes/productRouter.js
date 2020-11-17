const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");
const Middleware = require("../middlewares/middleware");

router.use(Middleware.adminAuth);
router.get("/", ProductController.allProduct);
router.post("/", ProductController.addProduct);
router.get("/:id", Middleware.authorization, ProductController.getOneProduct);
router.put("/:id", Middleware.authorization, ProductController.updateProduct);
router.delete(
  "/:id",
  Middleware.authorization,
  ProductController.deleteProduct
);

module.exports = router;
