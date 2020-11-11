const Helper = require("../helpers/helper");
const { User, Product } = require("../models");

class Middleware {
  static async authentication(req, res, next) {
    const { access_token } = req.headers;

    try {
      if (!access_token) throw { msg: "Authentication failed", status: 401 };
      else {
        const decoded = await Helper.verifyToken(access_token);
        const loggedUser = await User.findOne({
          where: {
            email: decoded.email,
          },
        });
        if (!loggedUser) throw { msg: "Authentication failed", status: 401 };
        else {
          req.loggedIn = decoded;
          next();
        }
      }
    } catch (err) {
      next(err);
    }
  }

  static async authorization(req, res, next) {
    const productId = +req.params.id;

    try {
      const foundProduct = await Product.findByPk(productId);
      if (!foundProduct) throw { msg: "Product not found", status: 404 };
      else if (foundProduct.id == req.loggedIn.id) next();
      else throw { msg: "Not authorized", status: 401 };
    } catch (err) {
      next(err);
    }
  }

  static errorHandler(err, req, res, next) {
    let status = err.status || 500;
    let msg = err.msg || "Internal Server Error";

    if (
      err.name === "SequelizeValidationError" ||
      err.name === "SequelizeUniqueConstraintError"
    ) {
      status = 400;
      msg = err.errors.map((el) => el.message).join(", ");
    } else if (err.name === "Invalid Input") {
      status = 401;
      msg = "Wrong email/password";
    } else if (err.name === "TokenExpiredError") {
      status = 401;
      msg = "Your away from the app for God knows how long! Please relogin!";
    } else if (err.name === "Authentication failed") {
      status = 401;
      msg = "Authentication failed";
    } else if (err.name === "Not authorized") {
      status = 401;
      msg = "Not authorized";
    } else if (err.name === "Product not found") {
      status = 404;
      msg = "Product not found";
    }
    res.status(status).json({ msg });
  }
}

module.exports = Middleware;
