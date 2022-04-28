const express = require('express');
const router = express.Router();
const SignupController = require('../controllers/SignupController');

/* GET home page. */
router.get('/signuppf', SignupController.signuppfView);
router.get('/signupong', SignupController.signupongView);


module.exports = router;