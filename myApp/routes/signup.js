const express = require('express');
const router = express.Router();
const SignupController = require('../controllers/SignupController');
const UsersController = require('../controllers/UsersController');
const AddressController = require('../controllers/AddressController');

/* GET home page. */
router.get('/signuppf', SignupController.signuppfView);
router.post('/signuppf', UsersController.store);

router.post('/signuppf/:user_id', AddressController.address_store);
router.get('/signuppf/:user_id', AddressController.index);

router.get('/signupong', SignupController.signupongView);

module.exports = router;