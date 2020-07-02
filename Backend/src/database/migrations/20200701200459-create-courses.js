'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Courses', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        allowNull: false, //permitir ou não ser nulo
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      teachers: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      room: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      start: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      end: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Courses');
  }
};
