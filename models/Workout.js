<<<<<<< HEAD
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Workout extends Model{}
=======
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')
class Workout extends Model {}
>>>>>>> 0ddfe523f564208aa06ad3d2c09bad690a9e8585

Workout.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
      exercise_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'exercise',
            key: 'id'
        }
      },
    },
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'workout',
      },
);
module.exports = Workout;
