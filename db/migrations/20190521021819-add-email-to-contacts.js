'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn("Contacts", "Email", {
      type: Sequelize.STRING,
      allowNull: false
    }),

  down: (queryInterface, Sequelize) => queryInterface.removeColumn("Contacts", "Email"),
};
