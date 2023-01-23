'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class company_phase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  company_phase.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      field: 'id',
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    phase: {
      type: DataTypes.STRING(255),
      field: 'phase',
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
  }, {
    sequelize,
    modelName: 'company_phase',
  });
  return company_phase;
};