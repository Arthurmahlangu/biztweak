'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class invites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  invites.init({
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER,
    attending: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'invite',
  });
  return invites;
};