const { body } = require('express-validator');

const pfValidateRegister = [
    body('nome')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 3, max: 50 })
    .withMessage('O nome deve ter entre 3 e 50 caracteres!'),
    
    body('email')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isEmail()
    .withMessage('E-mail inválido!'),

    body('cpf')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()    
    .isLength({ min: 11, max: 11 })
    .withMessage('CPF inválido!'),

    body('nascimento')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isISO8601()
    .withMessage('Data inválida!'),

    body('celular')
    .notEmpty()
    .withMessage('Preencha esse campo!'),
    
    body('senha')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 6, max: 12 })
    .withMessage('A senha deve ter entre 6 e 12 caracteres!'),

    body('profissao')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 3, max: 50 })
    .withMessage('A profissão deve ter entre 3 e 50 caracteres!'),

    body('alergias')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 3, max: 100 })
    .withMessage('A alergia deve ter entre 3 e 100 caracteres!'),

    body('criancas')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail(),

    body('outros_pets')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 3, max: 100 })
    .withMessage('Os outros pets devem ter entre 3 e 100 caracteres!'),

    body('cep')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 8, max: 9 })
    .bail()
    .isInt()
    .withMessage('CEP inválido!'),

    body('endereco')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 3, max: 100 })
    .withMessage('O endereço deve ter entre 3 e 100 caracteres!'),

    body('numero')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 1, max: 5 })
    .withMessage('O número deve ter entre 1 e 5 caracteres!'),

    body('complemento')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 3, max: 45 })
    .withMessage('O complemento deve ter entre 3 e 45 caracteres!'),

    body('bairro')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 3, max: 45 })
    .withMessage('O bairro deve ter entre 3 e 45 caracteres!'),

    body('cidade')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 3, max: 45 })
    .withMessage('A cidade deve ter entre 3 e 45 caracteres!'),

    body('estado')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 2, max: 2 })
    .withMessage('O estado deve ter 2 caracteres!'),
    
    body('tipo_local')
    .notEmpty()
    .withMessage('Preencha esse campo!')
    .bail()
    .isLength({ min: 3, max: 45 })
    .withMessage('O tipo de local deve ter entre 3 e 45 caracteres!'),
]

module.exports = pfValidateRegister;