'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, {
        foreignKey: 'fromUser',
        as: 'sender'
      })
      this.belongsTo(models.user, {
        foreignKey: 'toUserId',
        as: 'receiver'
      })
    }
  }
  message.init({
    toUserId: DataTypes.INTEGER,
    fromUser: DataTypes.INTEGER,
    body: DataTypes.TEXT,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'message',
  });
  return message;
};