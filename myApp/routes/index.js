const express = require('express');
const router = express.Router();
const IndexController = require('../controllers/IndexController');

/* GET home page. */
router.get('/', IndexController.indexView);
router.get('/teste', IndexController.testeView);
router.get('/search', IndexController.searchView);

module.exports = router;
