const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      fullNames: {
        type: DataTypes.STRING(100),
        field: 'fullNames',
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(50),
        field: 'email',
        allowNull: false,
        unique: true
      },
      phone: {
        type: DataTypes.STRING(15),
        field: 'phone',
        unique: true
      },
      education: {
        type: DataTypes.STRING(255),
        field: 'education'
      },
      workExperience: {
        type: DataTypes.STRING(255),
        field: 'workExperience'
      },
      workExperience2: {
        type: DataTypes.STRING(255),
        field: 'workExperience2'
      },
      location: {
        type: DataTypes.STRING(100),
        field: 'location'
      },
      photo: {
        type: DataTypes.STRING(255),
        field: 'photo'
      },
      marketNewsletter: {
        type: DataTypes.BOOLEAN,
        field: 'marketNewsletter'
      },
      productUpdatesAndCommunityAnnouncements: {
        type: DataTypes.BOOLEAN,
        field: 'productUpdatesAndCommunityAnnouncements'
      },
      role: {
        type: DataTypes.STRING(50),
        field: 'role',
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(255),
        field: 'password',
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'createdAt'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updatedAt'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  },
};