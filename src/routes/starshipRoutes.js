const { Router } = require('express');
const controllerStarship = require('../controllers/starshipController');

const router = Router();
router.get( '/', controllerStarship.getStartship );

module.exports = router;