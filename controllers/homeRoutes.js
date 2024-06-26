const router = require('express').Router();
const { Exercise, User, Workout } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
    try {
        const exerciseData = await Exercise.findAll({
            include: [{ model: Workout }]
        });

        const exercises = exerciseData.map((exercise) => exercise.get({ plain: true }));

        res.render('homepage', {
            exercises,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/exercise/:id', withAuth, async (req, res) => {
    try {
        const exerciseData = await Exercise.findByPk(req.params.id, {
            include: [{ model: Workout }]
        });
        const exercise = exerciseData.get({ plain: true });

        res.render('exercise', {
            ...exercise,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/workout/:id', async (req, res) => {
    try {
        const workoutData = await Workout.findByPk(req.params.id, {

        });
        const workout = workoutData.get({ plain: true });

        res.render('workout', {
            ...workout,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/profile', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Workout }],
        });

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/homepage');
        return;
    }

    res.render('login');
});

module.exports = router;