const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/ContactController');

/* GET home page. */
router.get('/', ContactController.contactView);

module.exports = router;
