const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/LoginController');
const loginValidator = require('../middlewares/loginValidator')

/* GET home page. */
router.get('/', LoginController.loginView);
router.post('/signin', loginValidator, LoginController.login);

module.exports = router;