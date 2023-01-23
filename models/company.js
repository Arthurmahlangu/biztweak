'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user)
      this.belongsTo(models.company_phase)
      this.belongsTo(models.company_industry)
    }
  }
  company.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING(255)
    },
    location: {
      type: DataTypes.STRING(100)
    },
    registered: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    registrationNumber: {
      type: DataTypes.STRING(55),
      unique: true
    },
    registrationDate: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW
    },
    productsOrServices: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    numberOfEmployees: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    monthlyTurnover: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    annualTurnover: {
      type: DataTypes.DOUBLE.UNSIGNED
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    companyPhaseId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    companyIndustryId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'company',
  });
  return company;
};