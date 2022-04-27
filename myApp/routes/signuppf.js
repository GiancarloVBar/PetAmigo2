const express = require('express');
const router = express.Router();
const SignuppfController = require('../controllers/SinguppfController');

/* GET home page. */
router.get('/', SignuppfController.signuppfView);

module.exports = router;
