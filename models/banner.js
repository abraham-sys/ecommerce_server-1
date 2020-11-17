'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Banner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Banner.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Fill the banner title",
        },
      },
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Fill the banner status",
        },
        isIn: {
          args: [['stimulator', 'main', 'reminder']],
          msg: "Status should only contain one of the followings: stimulator or main or reminder"
        }
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
          msg: "Put a valid url for image section",
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Banner',
  });
  return Banner;
};