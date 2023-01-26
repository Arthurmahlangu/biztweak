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
    role: {
      type: DataTypes.STRING
    },
    path: {
      type: DataTypes.STRING
    },
    model: {
      type: DataTypes.STRING
    },
    method: {
      type: DataTypes.STRING
    },
    owner: {
      default: false,
      type: DataTypes.BOOLEAN
    },
    group: {
      default: false,
      type: DataTypes.BOOLEAN
    },
    other: {
      default: false,
      type: DataTypes.BOOLEAN
    },
  }, {
    sequelize,
    modelName: 'rule',
  });
  return rule;
};