const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('courses', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING(100),
        field: 'title',
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: false
      },
      category: {
        type: DataTypes.STRING(100),
        field: 'category',
        allowNull: false
      },
      logo: {
        type: DataTypes.STRING(255),
        field: 'logo'
      },
      introVideo: {
        type: DataTypes.STRING(255),
        field: 'introVideo'
      },
      timeOptions: {
        type: DataTypes.STRING(50),
        field: 'timeOptions',
        allowNull: false
      },
      startDatetime: {
        type: DataTypes.DATE,
        field: 'startDatetime'
      },
      expiryDatetime: {
        type: DataTypes.DATE,
        field: 'expiryDatetime'
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'createdAt'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updatedAt'
      },
      userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'userId'
      },
      companyPhaseId: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'companyPhaseId'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('courses');
  },
};