const express = require("express");
const router = express.Router();
const userRouter = require("./userRouter.js");
const productRouter = require("./productRouter.js");
const bannerRouter = require("./bannerRouter.js");
const categoryRouter = require("./categoryRouter.js");
const cartRouter = require("./cartRouter.js");

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/banners", bannerRouter);
router.use("/categories", categoryRouter);
router.use("/carts", cartRouter);

module.exports = router;
