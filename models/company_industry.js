'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class company_industries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  company_industries.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      field: 'id',
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    industry: {
      type: DataTypes.STRING(255),
      field: 'industry'
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
    modelName: 'company_industry',
  });
  return company_industries;
};