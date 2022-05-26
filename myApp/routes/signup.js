const express = require('express');
const router = express.Router();
const SignupController = require('../controllers/SignupController');
const UsersController = require('../controllers/UsersController');
const OngController = require('../controllers/OngController');
const PetsController = require('../controllers/PetsController')

/* GET home page. */
router.get('/signuppf', SignupController.signuppfView);
router.post('/signuppf', UsersController.store);

router.get('/signupong', SignupController.signupongView);
router.get('/signupong/:ongs_id/getOngs', PetsController.getPets);
router.post('/signupong', OngController.store);

router.post('/signupong/:ongs_id/pets', PetsController.petStore);



module.exports = router;