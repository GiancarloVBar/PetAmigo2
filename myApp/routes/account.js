const express = require('express');
const router = express.Router();
const AccountController = require('../controllers/AccountController');

/* GET home page. */
router.get('/accountpf', AccountController.accountpfView);
router.put('/accountpf/edit/:id', AccountController.updatePfaccount)
router.put('/accountpf/password/:id', AccountController.updatePasswordAccountpf)
router.delete('/accountpf/delete/:id', AccountController.deleteAccountpf)
router.get('/accountong', AccountController.accountongView);
router.put('/accountpf/password/:id', AccountController.updatePfaccount)
router.get('/accountong/pets', AccountController.petsOngView);
router.get('/accountong/pets/editar', AccountController.petsOngEditarView);
router.get('/accountong/pets/cadastrar', AccountController.petsOngCadastrarView);

module.exports = router;