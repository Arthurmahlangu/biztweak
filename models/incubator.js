'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class incubator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  incubator.init({
    userid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    industry: DataTypes.STRING,
    location: DataTypes.STRING,
    type: DataTypes.STRING,
    sponsors: DataTypes.STRING,
    experience: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'incubator',
  });
  return incubator;
};