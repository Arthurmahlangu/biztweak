'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class assessment_answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  assessment_answer.init({
    userid: DataTypes.INTEGER,
    companyid: DataTypes.INTEGER,
    answers: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'assessment_answer',
  });
  return assessment_answer;
};