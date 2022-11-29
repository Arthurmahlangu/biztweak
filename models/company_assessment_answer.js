'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class company_assessment_answer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    company_assessment_answer.init({
        user_id: DataTypes.INTEGER,
        company_id: DataTypes.INTEGER,
        question_id: DataTypes.INTEGER,
        question_label: DataTypes.STRING,
        question_answer: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'company_assessment_answer',
    });
    return company_assessment_answer;
};