const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');
const AddressController = require('../controllers/AddressController');


router.post('/', UsersController.store);
router.post('/address/:user_id', AddressController.address_store);
router.get('/address/:user_id', AddressController.index);

module.exports = router;

