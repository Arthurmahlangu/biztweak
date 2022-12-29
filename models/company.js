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
    }
  }
  company.init({
    userid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    phase: DataTypes.STRING,
    registered: DataTypes.STRING,
    industry: DataTypes.STRING,
    employers: DataTypes.INTEGER,
    turnover: DataTypes.FLOAT,
    rating: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'company',
  });
  return company;
};