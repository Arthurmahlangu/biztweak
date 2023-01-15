'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user)
      this.hasMany(models.course_audio, {
        foreignKey: 'courseid',
        as: 'audios'
      })
      this.hasMany(models.course_video, {
        foreignKey: 'courseid',
        as: 'videos'
      })
      this.hasMany(models.course_text, {
        foreignKey: 'courseid',
        as: 'texts'
      })
      this.hasMany(models.course_test, {
        foreignKey: 'courseid',
        as: 'tests'
      })
      this.belongsToMany(models.company, {
        through: models.recomended_course,
        foreignKey: 'courseid'
      })
    }
  }
  course.init({
    userid: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    logo: DataTypes.STRING,
    intro_video: DataTypes.STRING,
    start_datetime: DataTypes.DATE,
    expiry_datetime: DataTypes.DATE,
    business_phase: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'course',
  });
  return course;
};