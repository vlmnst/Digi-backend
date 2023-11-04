const { Router } = require('express');
const controllerPeople = require('../controllers/peopleController');

const router = Router();
router.get( '/', controllerPeople.getPeople );

module.exports = router;