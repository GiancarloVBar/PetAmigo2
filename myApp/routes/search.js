const express = require('express');
const router = express.Router();
const SearchController = require('../controllers/SearchController');


router.get('/', SearchController.searchView);

module.exports = router;