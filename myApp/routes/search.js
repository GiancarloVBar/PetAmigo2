const express = require('express');
const router = express.Router();
// const SearchController = require('../controllers/SearchController');
const PetsController = require('../controllers/PetsController');


router.get('/', PetsController.getPets);
// router.get('/verMais', SearchController.verMaisView);

module.exports = router;