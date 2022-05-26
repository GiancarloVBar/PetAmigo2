const express = require('express');
const router = express.Router();
const AccountController = require('../controllers/AccountController');

/* GET home page. */
router.get('/accountpf', AccountController.accountpfView);
router.put('/accountpf/edit/:id', AccountController.updatePfaccount)
router.put('/accountpf/password/:id', AccountController.updatePasswordAccountpf)
router.delete('/accountpf/delete/:id', AccountController.deleteAccountpf)
router.get('/accountong', AccountController.accountongView);
<<<<<<< HEAD
router.put('/accountpf/password/:id', AccountController.updatePfaccount)
router.get('/accountong/pets', AccountController.petsOngView);
router.get('/accountong/pets/editar', AccountController.petsOngEditarView);
router.get('/accountong/pets/cadastrar', AccountController.petsOngCadastrarView);
=======

>>>>>>> eb7fdc9310de5a9ca006468c90dc8b8e84ef8d79

module.exports = router;