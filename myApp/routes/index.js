const express = require('express');
const router = express.Router();
const IndexController = require('../controllers/IndexController');
const PetsController = require('../controllers/PetsController');

/* GET home page. */
router.get('/', IndexController.indexView);
router.get('/teste', IndexController.searchView)
router.post('/search', PetsController.search)
    
module.exports = router;