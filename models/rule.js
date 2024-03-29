'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rule.init({
    role: DataTypes.STRING,
    model: DataTypes.STRING,
    method: DataTypes.STRING,
    owner: DataTypes.STRING,
    group: DataTypes.STRING,
    other: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'rule',
  });
  return rule;
};