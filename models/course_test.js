'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course_test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  course_test.init({
    userid: DataTypes.INTEGER,
    courseid: DataTypes.INTEGER,
    question: DataTypes.TEXT,
    answer: DataTypes.TEXT,
    correct_answer: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'course_test',
  });
  return course_test;
};