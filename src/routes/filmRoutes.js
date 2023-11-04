const { Router } = require('express');
const controllerFilm = require('../controllers/filmController');

const router = Router();
router.get( '/', controllerFilm.getFilms );

module.exports = router;