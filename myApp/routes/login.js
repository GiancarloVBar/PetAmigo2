const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/LoginController');

/* GET home page. */
router.get('/', LoginController.loginView);
router.post('/signin', LoginController.login);

module.exports = router;