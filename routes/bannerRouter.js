const express = require("express");
const router = express.Router();
const BannerController = require("../controllers/BannerController");
const Middleware = require("../middlewares/middleware");

router.use(Middleware.adminAuth);
router.get("/", BannerController.allBanner);
router.post("/", BannerController.addBanner);
router.get("/:id", BannerController.getOneBanner);
router.put("/:id", BannerController.updateBanner);
router.delete(
  "/:id",
  BannerController.deleteBanner
);

module.exports = router;
