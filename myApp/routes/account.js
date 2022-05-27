const express = require('express');
const router = express.Router();
const AccountController = require('../controllers/AccountController');
const { checkUserAuthenticated, checkUserPermission } = require('../middlewares/UserValidator');

/* GET home page. */
router.get('/accountpf', checkUserAuthenticated, AccountController.accountpfView);
router.put('/accountpf/password/:id', checkUserPermission, AccountController.updatePasswordAccountpf);
router.delete('/accountpf/delete/:id', checkUserPermission, AccountController.deleteAccountpf);
router.get('/accountong', AccountController.accountongView);


module.exports = router;