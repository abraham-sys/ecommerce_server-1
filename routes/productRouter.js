const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");
const Middleware = require("../middlewares/middleware");

router.use(Middleware.authentication);
router.get("/", ProductController.allTask);
router.post("/", ProductController.addTask);
// router.get("/:id", Middleware.authorization, ProductController.getOneTask);
// router.put("/:id", Middleware.authorization, ProductController.updateTask);
// router.delete("/:id", Middleware.authorization, ProductController.deleteTask);

module.exports = router;
