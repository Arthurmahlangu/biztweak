'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class company extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    company.init({
        user_id: DataTypes.INTEGER,
        logo: DataTypes.STRING,
        business_industry: DataTypes.STRING,
        business_phase: DataTypes.STRING,
        business_location: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'company',
    });
    return company;
};