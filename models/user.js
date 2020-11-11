"use strict";
const { Model } = require("sequelize");
const Helper = require("../helpers/helper");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Product);
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Don't put empty email",
          },
          isEmail: {
            args: true,
            msg: "Put a valid email address",
          },
          isUniqueEmail(value, next) {
            User.findOne({ where: { email: value } }).then((data) => {
              if (!data) next();
              else {
                next("Email already registered");
              }
            });
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Please fill the password",
          },
          isPassword(value, next) {
            let isContainNumber = false;
            let numbers = "123456789".split("");
            value.split("").forEach((eachValue) => {
              numbers.forEach((eachNumber) => {
                if (eachValue === eachNumber) {
                  isContainNumber = true;
                }
              });
            });
            if (!isContainNumber) next("Password must include number!");
          },
        },
      },
      role: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate(instance) {
          instance.password = Helper.hashPassword(instance.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
