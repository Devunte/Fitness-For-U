const sequelize = require('../config/connection');
const { User, Exercise, Workout } = require('../models');

const userData = require('./userData.json');
const exerciseData = require('./exerciseData.json');
const workoutData = require('./workoutData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
// This could change , I am not too sure if its create or bulkCreate
   const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

    await Exercise.bulkCreate(exerciseData, {
    individualHooks: true,
    returning: true,
  });

  for (const workout of workoutData) {
    await Workout.create({
      ...workout,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
}



seedDatabase();
