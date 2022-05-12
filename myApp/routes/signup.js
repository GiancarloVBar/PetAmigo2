const express = require('express');
const router = express.Router();
const SignupController = require('../controllers/SignupController');
const UsersController = require('../controllers/UsersController');

/* GET home page. */
router.get('/signuppf', SignupController.signuppfView);
router.post('/signuppf', UsersController.store);



router.get('/signupong', SignupController.signupongView);

module.exports = router;