const express = require('express');
const router = express.Router();
const LogoutController = require('../controllers/LogoutController');
const { checkUserAuthenticated } = require('../middlewares/UserValidator');

/* GET home page. */
router.get('/', checkUserAuthenticated,  LogoutController.logout);

module.exports = router;