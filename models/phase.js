'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class phase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  phase.init({
    label: {
      type: DataTypes.STRING(100),
      field: 'label',
    },
  }, {
    sequelize,
    modelName: 'phase',
  });
  return phase;
};