const express = require('express');
const router = express.Router();
const AccountController = require('../controllers/AccountController');
const { checkUserAuthenticated, checkUserPermission } = require('../middlewares/UserValidator');

/* GET home page. */
router.get('/accountpf', checkUserAuthenticated, AccountController.accountpfView);
router.put('/accountpf/edit/:id', checkUserPermission, AccountController.updatePfaccount)
router.put('/accountpf/password/:id', checkUserPermission, AccountController.updatePasswordAccountpf);
router.delete('/accountpf/delete/:id', checkUserPermission, AccountController.deleteAccountpf);

router.get('/accountong', checkUserAuthenticated, AccountController.accountongView);
router.get('/accountong/pets', checkUserAuthenticated, AccountController.petsOngView);
router.get('/accountong/pets/editar', checkUserAuthenticated, AccountController.petsOngEditarView);
router.get('/accountong/pets/cadastrar', checkUserAuthenticated, AccountController.petsOngCadastrarView);

module.exports = router;