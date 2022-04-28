const express = require('express');
const router = express.Router();
const ServicesController = require('../controllers/ServicesController');

/* GET home page. */
router.get('/', ServicesController.servicesView);
router.get('/baba', ServicesController.babaView);
router.get('/vet', ServicesController.vetView);
router.get('/dogwalking', ServicesController.dogWalkingView);
router.get('/petshop', ServicesController.petShopView);

module.exports = router;
