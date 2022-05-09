const express = require('express');
const router = express.Router();
const LogoutController = require('../controllers/LogoutController');

/* GET home page. */
router.get('/', LogoutController.logout);

module.exports = router;