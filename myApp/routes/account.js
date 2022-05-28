const express = require('express');
const router = express.Router();
const multer = require('multer')
const AccountController = require('../controllers/AccountController');
const { checkUserAuthenticated, checkUserPermission, checkIsUser, checkIsOng } = require('../middlewares/UserValidator');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        const extensaoArquivo = file.originalname.split('.')[1];

        const novoNomeArquivo = require('crypto')
            .randomBytes(64)
            .toString('hex');

        cb(null, `${novoNomeArquivo}.${extensaoArquivo}`);
    }
});

const upload = multer({ storage });

/* GET home page. */
router.get('/accountpf', checkUserAuthenticated, checkIsUser, AccountController.accountPfView);
router.put('/accountpf/edit/:id', checkUserPermission, checkIsUser, AccountController.updatePfAccount)
router.put('/accountpf/password/:id', checkUserPermission, checkIsUser, AccountController.updatePasswordAccountPf);
router.delete('/accountpf/delete/:id', checkUserPermission, checkIsUser, AccountController.deleteAccountPf);

router.get('/accountong', checkUserAuthenticated, checkIsOng, AccountController.accountOngView);


router.get('/accountong/:id/pets', checkUserAuthenticated, checkIsOng, AccountController.petsOngView);

router.get('/accountong/pets/edit/:id', checkUserAuthenticated, AccountController.petsOngEditarView);
router.post('/accountong/pets/edit/:id', checkUserAuthenticated, upload.single('foto'), AccountController.petsOngEditar);
router.get('/accountong/pets/delete/:id', checkUserAuthenticated, AccountController.petsOngDelete);
router.get('/accountong/pets/cadastrar', checkUserAuthenticated, checkIsOng, AccountController.petsOngCadastrarView);
router.post('/accountong/pets/cadastrar', checkUserAuthenticated, checkIsOng, upload.single('foto'), AccountController.petsOngCadastrar);
router.put('/accountong/edit/:id', checkUserPermission, checkIsOng, AccountController.updateOngAccount)
router.put('/accountong/password/:id', checkUserPermission, checkIsOng, AccountController.updatePasswordAccountOng);
router.delete('/accountong/delete/:id', checkUserPermission, checkIsOng, AccountController.deleteAccountOng);

module.exports = router;
