const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');


router.post('/', UsersController.store);
router.get('/getusers', UsersController.getUsers);
router.put('/:id/update', UsersController.update);

module.exports = router;

