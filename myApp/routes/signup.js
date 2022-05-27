const express = require('express');
const router = express.Router();
const SignupController = require('../controllers/SignupController');
const UsersController = require('../controllers/UsersController');
const OngController = require('../controllers/OngController');
const PetsController = require('../controllers/PetsController');
const pfFormValidator = require('../middlewares/pfFormValidator');
const OngFormValidator = require('../middlewares/ongFormValidator');
const AccountController = require('../controllers/AccountController');

/* GET home page. */
router.get('/signuppf', SignupController.signuppfView);
router.post('/signuppf',pfFormValidator, UsersController.store);

router.get('/signupong', SignupController.signupongView);
// router.get('/signupong/:ongs_id/getOngs', AccountController.petsOngView);
router.post('/signupong', OngFormValidator, OngController.store);

router.post('/signupong/:ongs_id/pets', PetsController.petStore);

module.exports = router;