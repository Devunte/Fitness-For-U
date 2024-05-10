const router = require('express').Router();
<<<<<<< HEAD
router.get('/', async (req, res) => {
    try {
      res.render('homepage.handlebars');
    } catch (err) {
      res.status(500).json(err);
    }
  });
=======


>>>>>>> 0ddfe523f564208aa06ad3d2c09bad690a9e8585
module.exports = router;