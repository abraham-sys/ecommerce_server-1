const { Category } = require("../models");

class CategoryController {
  static async allCategory(req, res, next) {
    try {
      const foundAllCategory = await Category.findAll({
        order: [['id', 'ASC']]
      });
      res.status(200).json({ foundAllCategory });
    } catch (err) {
      next(err);
    }
  }

  static async addCategory(req, res, next) {
    const { name } = req.body;
    console.log(name);
    try {
      await Category.create({
        name
      });
      res.status(201).json({ msg: "A new category is added and ready to be used!" });
    } catch (err) {
      next(err);
    }
  }

}

module.exports = CategoryController;
