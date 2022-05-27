const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');


router.post('/', UsersController.store);
router.get('/getusers', UsersController.getUsers);

module.exports = router;

