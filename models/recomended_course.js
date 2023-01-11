'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recomended_course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  recomended_course.init({
    companyid: DataTypes.INTEGER,
    courseid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'recomended_course',
  });
  return recomended_course;
};