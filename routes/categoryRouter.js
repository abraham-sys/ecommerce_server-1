const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");
const Middleware = require("../middlewares/middleware");

router.use(Middleware.adminAuth);
router.get("/", CategoryController.allCategory);
router.post("/", CategoryController.addCategory);

module.exports = router;
