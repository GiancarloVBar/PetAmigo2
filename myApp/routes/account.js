const express = require('express');
const router = express.Router();
const AccountController = require('../controllers/AccountController');

/* GET home page. */
router.get('/accountpf', AccountController.accountpfView);
router.get('/accountong', AccountController.accountongView);


module.exports = router;