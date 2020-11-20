"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Assassins Creed Origins",
          image_url:
            "https://images-na.ssl-images-amazon.com/images/I/81MztoQMa8L._AC_SL1500_.jpg",
          price: 350000,
          stock: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 10
        },
        {
          name: "Assassins Creed Valhalla",
          image_url:
            "https://gamespot1.cbsistatic.com/uploads/scale_tiny/1593/15930215/3667159-5e84a5065cdf9a21c0b4e737.jpg",
          price: 475000,
          stock: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 10
        },
        {
          name: "Assassins Creed Odyssey",
          image_url:
            "https://images-na.ssl-images-amazon.com/images/I/81SvodUkcuL._SL1500_.jpg",
          price: 500000,
          stock: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 10
        },
        {
          name: "PS 5",
          image_url:
            "https://gamespot1.cbsistatic.com/uploads/screen_kubrick/1551/15511094/3756678-ps5-review-promothumb.jpg",
          price: 6500000,
          stock: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 11
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
