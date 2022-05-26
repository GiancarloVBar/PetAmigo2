const express = require('express');
const router = express.Router();
const SearchController = require('../controllers/SearchController');


router.get('/', SearchController.searchView);
router.get('/verMais', SearchController.verMaisView);

module.exports = router;