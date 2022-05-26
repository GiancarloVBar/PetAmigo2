const { body } = require('express-validator');

const ongValidateRegister = [
    body('razao_social')/*  */
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 3, max: 50 })
    .withMessage('O nome deve ter entre 3 e 50 caracteres!'),

    body('email')/*  */
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isEmail()
    .withMessage('E-mail inválido!'),

    body('responsavel')/*  */
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 3, max: 45 })
    .withMessage('O nome deve ter entre 3 e 45 caracteres!'),

    body('cnpj')/*  */
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 14, max: 14 })
    .withMessage('CNPJ inválido!'),

    body('telefone')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 3, max: 50 })
    .withMessage('O nome deve ter entre 3 e 50 caracteres!'),

    body('senha')/*  */
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 6, max: 12 })
    .withMessage('A senha deve ter entre 6 e 12 caracteres!'),

    body('anos_de_funcionamento')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 3, max: 50 })
    .withMessage('O nome deve ter entre 3 e 50 caracteres!'),

    body('quantidade_animais')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 3, max: 50 })
    .withMessage('O nome deve ter entre 3 e 50 caracteres!'),

    body('historia')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 3, max: 50 })
    .withMessage('O nome deve ter entre 3 e 50 caracteres!'),

    body('cep')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 3, max: 50 })
    .withMessage('O nome deve ter entre 3 e 50 caracteres!'),

    body('endereco')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 3, max: 50 })
    .withMessage('O nome deve ter entre 3 e 50 caracteres!'),

    body('numero')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 3, max: 50 })
    .withMessage('O nome deve ter entre 3 e 50 caracteres!'),

    body('complemento')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 3, max: 50 })
    .withMessage('O nome deve ter entre 3 e 50 caracteres!'),

    body('bairro')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 3, max: 50 })
    .withMessage('O nome deve ter entre 3 e 50 caracteres!'),

    body('cidade')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 3, max: 50 })
    .withMessage('O nome deve ter entre 3 e 50 caracteres!'),

    body('estado')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 3, max: 50 })
    .withMessage('O nome deve ter entre 3 e 50 caracteres!'),

    body('tipo_local')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 3, max: 50 })
    .withMessage('O nome deve ter entre 3 e 50 caracteres!'),


]

module.exports = ongValidateRegister;