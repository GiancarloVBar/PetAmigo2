const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');
// const AddressController = require('../controllers/AddressController');


router.post('/', UsersController.store);
// router.post('/:user_id/address', AddressController.address_store);

module.exports = router;

