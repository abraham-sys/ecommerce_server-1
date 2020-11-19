"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.User, {
        through: models.Cart
      })
      Product.belongsTo(models.Category);
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Fill the product name",
          },
        },
      },
      image_url: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Fill the image_url",
          },
          isUrl: {
            args: true,
            msg: "Put a valid url for image_url",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: "Fill the price",
          },
          min: {
            args: true,
            msg: "Do you want to be rich or not?",
          },
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: "Fill the stock",
          },
          min: {
            args: true,
            msg: "A rich man doesn't sell nothin",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
