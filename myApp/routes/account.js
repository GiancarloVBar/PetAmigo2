const express = require('express');
const router = express.Router();
const AccountController = require('../controllers/AccountController');
const { checkUserAuthenticated, checkUserPermission, checkIsUser, checkIsOng } = require('../middlewares/UserValidator');

/* GET home page. */
router.get('/accountpf', checkUserAuthenticated, checkIsUser, AccountController.accountPfView);
router.put('/accountpf/edit/:id', checkUserPermission, checkIsUser, AccountController.updatePfAccount)
router.put('/accountpf/password/:id', checkUserPermission, checkIsUser, AccountController.updatePasswordAccountPf);
router.delete('/accountpf/delete/:id', checkUserPermission, checkIsUser, AccountController.deleteAccountPf);

router.get('/accountong', checkUserAuthenticated, checkIsOng, AccountController.accountOngView);
router.get('/accountong/pets', checkUserAuthenticated, checkIsOng, AccountController.petsOngView);
router.get('/accountong/pets/editar', checkUserAuthenticated, checkIsOng, AccountController.petsOngEditarView);
router.get('/accountong/petsCadastrar', checkUserAuthenticated, checkIsOng, AccountController.petsOngCadastrarView);
router.put('/accountong/edit/:id', checkUserPermission, checkIsOng, AccountController.updateOngAccount)
router.put('/accountong/password/:id', checkUserPermission, checkIsOng, AccountController.updatePasswordAccountOng);
router.delete('/accountong/delete/:id', checkUserPermission, checkIsOng, AccountController.deleteAccountOng);

module.exports = router;