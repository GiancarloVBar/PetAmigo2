const express = require('express');
const router = express.Router();
const ServicesController = require('../controllers/ServicesController');

/* GET home page. */
router.get('/', ServicesController.servicesView);

module.exports = router;
