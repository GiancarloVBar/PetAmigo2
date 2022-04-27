const express = require('express');
const router = express.Router();
const SignupongController = require('../controllers/SignupongController');

/* GET home page. */
router.get('/', SignupongController.signupongView);

module.exports = router;
