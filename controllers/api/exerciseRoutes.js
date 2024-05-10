const router = require('express').Router();
const { Exercise , Workout } = require('../../models');


// /api/exercises/
router.get('/', async () => {
    try {
        const exerciseData = await Exercise.findAll({
            include: [{ model: Workout }], // Could comment out for now too idk what i does yet,
        });
        
        res.status(200).json(exerciseData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// /api/exercises/(id)
router.get('/:id', async () => {
    try {
        const exerciseData = await Exercise.findByPk(req.params.id, {
            include: [{ model: Workout }],
        });

        if (!exerciseData) {
            res.status(404).json({ message: 'No exercise found with that id' });
            return;
        }

        res.status(200).json(exerciseData);
    } catch (err) {
        res.status(500).json(err);
    }
});






module.exports = router;