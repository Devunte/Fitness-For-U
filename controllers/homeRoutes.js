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
    
        req.render('exercise', {
            ...exercise,
        })
    }
})

    








    

