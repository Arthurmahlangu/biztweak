'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  token.init({
    userId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    data: DataTypes.TEXT,
    token: DataTypes.TEXT,
    expiry: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'token',
  });
  return token;
};