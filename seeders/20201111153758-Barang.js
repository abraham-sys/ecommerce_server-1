"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "standing deks",
          image_url:
            "https://images-na.ssl-images-amazon.com/images/I/81FoD8eKgdL._AC_SL1500_.jpg",
          price: 20000,
          stock: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 7,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
