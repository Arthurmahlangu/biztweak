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
      this.hasOne(models.assessment_answer, {
        foreignKey: 'companyid',
        as: 'assessments'
      })
      this.hasOne(models.report, {
        foreignKey: 'companyid',
      })
    }
  }
  company.init({
    userid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    logo: DataTypes.STRING,
    location: DataTypes.STRING,
    phase: DataTypes.STRING,
    registered: DataTypes.BOOLEAN,
    registration_number: DataTypes.STRING,
    industry: DataTypes.STRING,
    employees: DataTypes.INTEGER,
    monthly_turnover: DataTypes.FLOAT,
    annual_turnover: DataTypes.FLOAT,
    rating: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'company',
  });
  return company;
};