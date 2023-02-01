'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class phase_question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  phase_question.init({
    phaseId: DataTypes.INTEGER,
    assessmentQuestionId: DataTypes.INTEGER,
    priorityElement: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'phase_question',
  });
  return phase_question;
};