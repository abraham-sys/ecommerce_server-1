const { User } = require("../models");
const Helper = require("../helpers/helper");

class UserController {
  static async login(req, res, next) {
    const { email, password } = req.body;
    try {
      const foundUser = await User.findOne({
        where: {
          email: email,
        },
      });
      if (foundUser == null) throw { msg: "User not found", status: 404 };
      else if (foundUser.role != "admin") throw { msg: "Only for admin" };
      else if (!Helper.comparePassword(password, foundUser.password))
        throw { msg: "Wrong password!", status: 401 };
      else {
        const accessToken = Helper.signToken({
          id: foundUser.id,
          email: foundUser.email,
        });
        res.status(200).json({
          access_token: accessToken,
          id: foundUser.id,
        });
      }
    } catch (err) {
      next(err);
    }
  }
  
  static async loginCustomer(req, res, next) {
    const { email, password } = req.body;
    try {
      const foundUser = await User.findOne({
        where: {
          email: email,
        },
      });
      if (foundUser == null) throw { msg: "User not found", status: 404 };
      else if (foundUser.role != "customer") throw { msg: "only for customer" };
      else if (!Helper.comparePassword(password, foundUser.password))
        throw { msg: "Wrong password!", status: 401 };
      else {
        const accessToken = Helper.signToken({
          id: foundUser.id,
          email: foundUser.email,
        });
        res.status(200).json({
          access_token: accessToken,
          id: foundUser.id,
        });
      }
    } catch (err) {
      next(err);
    }
  }

  static async register (req, res, next) {
    console.log("masuk di register");
    const { email, password} = req.body;
    try {
      console.log("di try-nya register");
      const newUser = await User.create({email, password});
      res.status(201).json({id: newUser.id, email: newUser.email});
    } catch (err) {
      console.log("di catch nya register");
      next(err);
    }
  }

}

module.exports = UserController;
