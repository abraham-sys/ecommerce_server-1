"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Banners",
      [
        {
          title: "Astronout and Butterflies",
          status : "stimulator",
          image_url: "https://image8.uhdpaper.com/wallpaper-hd/flower-field-astronaut-butterflies-uhdpaper.com-hd-8.1388.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Woman and Yokai",
          status: "stimulator",
          image_url: "https://image8.uhdpaper.com/wallpaper-hd/fantasy-japanese-demon-yokai-art-uhdpaper.com-hd-8.1406.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Arcade Gaming",
          status: "main",
          image_url: "https://image8.uhdpaper.com/wallpaper-hd/arcade-playing-games-art-uhdpaper.com-hd-8.248.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Banners", null, {});
  },
};
