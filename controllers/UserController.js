const { User } = require("../models");
const Helper = require("../helpers/helper");
const { OAuth2Client } = require("google-auth-library");

class UserController {
  static async register(req, res, next) {
    const { email, password } = req.body;
    try {
      const newUser = await User.create({ email, password });
      res.status(201).json({ id: newUser.id, email: newUser.email });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    const { email, password } = req.body;
    try {
      const foundUser = await User.findOne({
        where: {
          email: email,
        },
      });
      if (foundUser == null) throw { msg: "User not found", status: 404 };
      else if (!Helper.checkPassword(password, foundUser.password))
        throw { msg: "Wrong password!", status: 401 };
      else {
        const accessToken = Helper.signToken({
          id: foundUser.id,
          email: foundUser.email,
        });
        res.status(200).json({ access_token: accessToken, id: foundUser.id });
      }
    } catch (err) {
      next(err);
    }
  }

  static googleLogin(req, res, next) {
    const { googleToken } = req.body;
    const googleClientId = new OAuth2Client(process.env.CLIENT_ID);
    let email = "";

    googleClientId
      .verifyIdToken({
        idToken: googleToken,
        audience: process.env.CLIENT_ID,
      })
      .then((ticket) => {
        const payload = ticket.getPayload();
        email = payload.email;

        return User.findOne({
          where: {
            email: payload.email,
          },
        });
      })
      .then((user) => {
        if (user) {
          return user;
        } else {
          let userObj = {
            email,
            password: "randomsaja",
          };
          return User.create(userObj);
        }
      })
      .then((userData) => {
        const accessToken = Helper.signToken({
          id: userData.id,
          email: userData.email,
        });
        return res
          .status(200)
          .json({ access_token: accessToken, id: userData.id });
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = UserController;
