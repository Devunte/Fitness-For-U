<<<<<<< HEAD
const router = require('express').Router()
=======
const router = require('express').Router();
>>>>>>> 0ddfe523f564208aa06ad3d2c09bad690a9e8585

const { Workout } = require('../../models')


router.post('/', async (req, res) => {
    try {
     const newWorkout = await Workout.create({
        ...req.body, 
        user_id: req.session.user_id,
     })
     res.status(200).json(newWorkout)
    } catch(err){
    res.status(400).json(err); }
})

router.get('/', async (req, res) => {
    try {
      const workouts = await Workout.findAll();

      if (!workouts) {
        return res.status(404).json({ message: 'No workout data found' });
      }

      res.status(200).json(workouts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

router.delete('/:id', async (req, res) => {
    try {
      const workoutData = await Workout.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!workoutData) {
        res.status(404).json({ message: 'No workout data found with this id!' });
        return;
      }
  
      res.status(200).json(workoutData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
