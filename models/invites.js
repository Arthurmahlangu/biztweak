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
    userid: DataTypes.INTEGER,
    eventid: DataTypes.INTEGER,
    attending: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'invites',
  });
  return invites;
};