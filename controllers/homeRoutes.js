const router = require('express').Router();
const { Exercise, User, Workout } = require('../models');


router.get('/', async (req, res) => {
    try {
        const exerciseData = await Exercise.findAll({
            include: [{ model: Workout }]
        });

        const exercises = exerciseData.map((exercise) => exercise.get({plain: true}));

        res.render('homepage', {
            exercises,
            logged_in: req.session.logged_in 
        })
        } catch (err) {
                res.status(500).json(err);
            }
});

router.get('/exercise/:id', async (req,res) => {
    try {
        const exerciseData = await Exercise.findByPk(req.params.id, {
            include: [{model: Workout}]
        });
        const exercise = exerciseData.get({ plain: true });
    
        res.render('exercise', {
            ...exercise,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/workout/:id', async (req,res) => {
    try{
        const workoutData = await Workout.findByPk(req.params.id, {
            
        });
        const workout = workoutData.get({ plain: true });

        res.render('workout',{
            ...workout,
        });
    } catch(err) {
        res.status(500).json(err);
    }
});

// router.get('/login', async (req,res) => {
//     if (!req.seesion.logged_in) {
//         res.render('login');
//     })
// });







module.exports = router;

    








    

