const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");
const Middleware = require("../middlewares/middleware");

router.get("/", CategoryController.allCategory);
router.use(Middleware.adminAuth);
router.post("/", CategoryController.addCategory);

module.exports = router;
