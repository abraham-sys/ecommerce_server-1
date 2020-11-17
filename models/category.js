'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Product)
    }
  };
  Category.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Don't empty category name"
        },
        isAlpha: {
          args: true,
          msg: "Category must only contain letters and not contain spaces"
        },
        isUniqueCategory(value, next) {
          Category.findAll()
          .then((data) => {
            data.forEach(el => {
              if(el.name.toLowerCase() === value.toLowerCase())  next ("That category is already exist")
            })
          });
        },
      }
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};