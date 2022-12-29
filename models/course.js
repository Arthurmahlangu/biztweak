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
    }
  }
  course.init({
    userid: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'course',
  });
  return course;
};