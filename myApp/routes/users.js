const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');
const AddressController = require('../controllers/AddressController');
const { checkUserPermission } = require('../middlewares/UserValidator');


router.post('/', UsersController.store);
router.post('/address/:id', checkUserPermission, AddressController.address_store);
router.get('/address/:id', checkUserPermission, AddressController.index);

module.exports = router;

