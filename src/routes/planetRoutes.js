const { Router } = require('express');
const controllerPlanet = require('../controllers/planetController');

const router = Router();
router.get( '/', controllerPlanet.getPlanet );

module.exports = router;