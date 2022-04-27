const express = require('express');
const router = express.Router();
const AboutController = require('../controllers/AboutController');

/* GET home page. */
router.get('/', AboutController.aboutView);

module.exports = router;
