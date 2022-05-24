const { body } = require('express-validator');

const validateRegister = [
    body('email')
    .notEmpty().withMessage('Preencha esse campo!')
    .bail()
    .withMessage('Preencha esse campo!')
    .isEmail().withMessage('Deve preencher um Email válido!'),

    body('senha')
    .notEmpty().withMessage('Preencha esse campo!')
    .bail()
    .isLenght({min: 6})
    .withMessage('Sua senha deve ter pelo menos 6 caracteres!')    
]

module.exports = validateRegister;