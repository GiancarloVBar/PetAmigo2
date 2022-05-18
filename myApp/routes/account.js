const express = require('express');
const router = express.Router();
const AccountController = require('../controllers/AccountController');

/* GET home page. */
router.get('/accountpf', AccountController.accountpfView);
router.put('/accountpf/password/:id', AccountController.updatePasswordAccountpf)
router.delete('/accountpf/delete/:id', AccountController.deleteAccountpf)
router.get('/accountong', AccountController.accountongView);


module.exports = router;