"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "VideoGame",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Console",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "DigitalArts",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
