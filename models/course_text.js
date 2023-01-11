'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course_text extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  course_text.init({
    userid: DataTypes.INTEGER,
    courseid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    type: DataTypes.STRING,
    file: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'course_text',
  });
  return course_text;
};