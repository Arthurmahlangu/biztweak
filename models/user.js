'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    fullNames: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    phone: {
      type: DataTypes.STRING(15),
      unique: true
    },
    education: {
      type: DataTypes.STRING(255)
    },
    workExperience: {
      type: DataTypes.STRING(255)
    },
    workExperience2: {
      type: DataTypes.STRING(255)
    },
    location: {
      type: DataTypes.STRING(100)
    },
    photo: {
      type: DataTypes.STRING(255)
    },
    marketNewsletter: {
      type: DataTypes.BOOLEAN
    },
    productUpdatesAndCommunityAnnouncements: {
      type: DataTypes.BOOLEAN
    },
    role: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return User;
};