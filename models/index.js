const User = require('./User');
const Exercise = require('./Exercise');
const Workout = require('./Workout');

User.hasMany(Workout, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Workout.belongsTo(Exercise, {
    foreignKey: 'exercise_id',
});

Exercise.hasMany(Workout, {
    foreignKey: 'exercise_id',
    onDelete: 'CASCADE',

})

module.exports = { User, Exercise, Workout };