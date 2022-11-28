'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class company_assessment_question extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    company_assessment_question.init({
        user_id: DataTypes.INTEGER,
        category: DataTypes.STRING,
        label: DataTypes.STRING,
        answer: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'company_assessment_question',
    });
    return company_assessment_question;
};