'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    education: DataTypes.STRING,
    work_experience: DataTypes.STRING,
    work_experience2: DataTypes.STRING,
    location: DataTypes.STRING,
    photo: DataTypes.STRING,
    market_newsletter: DataTypes.BOOLEAN,
    product_updates_and_community_announcements: DataTypes.BOOLEAN,
    role: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};