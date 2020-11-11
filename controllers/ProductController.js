const { Product, User } = require("../models");

class ProductController {
  static async allProduct(req, res, next) {
    try {
      const foundAllProduct = await Product.findAll({
        include: {
          model: User,
          attributes: {
            exclude: ["password"],
          },
        },
        order: [["id", "ASC"]],
      });
      res.status(200).json({ foundAllProduct });
    } catch (err) {
      next(err);
    }
  }

  static async addProduct(req, res, next) {
    const { name, image_url, price, stock } = req.body;
    const UserId = +req.loggedIn.id;
    try {
      await Product.create({
        name,
        image_url,
        price,
        stock,
        UserId,
      });
      res.status(201).json({ msg: "Product is successfully created" });
    } catch (err) {
      next(err);
    }
  }

  static async getOneProduct(req, res, next) {
    const productId = +req.params.id;

    try {
      const foundProduct = await Product.findOne({
        where: {
          id: productId,
        },
        include: {
          model: User,
          attributes: {
            exclude: ["password"],
          },
        },
      });
      res.status(200).json({ foundProduct });
    } catch (err) {
      next(err);
    }
  }

  static async updateProduct(req, res, next) {
    const { name, image_url, price, stock } = req.body;
    const productId = +req.params.id;

    try {
      await Product.update(
        { name, image_url, price, stock },
        {
          where: {
            id: productId,
          },
        }
      );
      res.status(200).json({ msg: "Product is successfully updated!" });
    } catch (err) {
      next(err);
    }
  }

  static async deleteProduct(req, res, next) {
    const productId = +req.params.id;

    try {
      await Product.destroy({ where: { id: productId } });
      res.status(200).json({ msg: "Product is successfully deleted" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ProductController;
