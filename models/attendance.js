'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class attendance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  attendance.init({
    userid: DataTypes.INTEGER,
    category: DataTypes.STRING,
    type: DataTypes.STRING,
    date: DataTypes.DATE,
    attended: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'attendance',
  });
  return attendance;
};