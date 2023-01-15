'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, {
        foreignKey: 'userid',
        as: 'host'
      })
      this.belongsToMany(models.user, {
        through: models.invite,
        foreignKey: 'eventid',
        as: 'invites'
      })
    }
  }
  event.init({
    userid: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    type: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    frequency: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'event',
  });
  return event;
};