const express = require('express');
const router = express.Router();
const SearchController = require('../controllers/SearchController');
const PetsController = require('../controllers/PetsController');
const IndexController = require('../controllers/IndexController');

/* GET home page. */
router.get('/', IndexController.indexView);
router.get('/search', SearchController.searchView)
router.post('/search', PetsController.search)
    
module.exports = router;