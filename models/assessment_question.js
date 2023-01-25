'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class assessment_question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.company_phase)
    }
  }
  assessment_question.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    question: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    yesAnswer: {
      type: DataTypes.STRING(255)
    },
    noAnswer: {
      type: DataTypes.STRING(255)
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    module: {
      type: DataTypes.TEXT
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    },
    companyPhaseId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'assessment_question',
  });
  return assessment_question;
};