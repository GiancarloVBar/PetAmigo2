const { check } = require('express-validator');

const validateRegister = [
    check('email')
    .notEmpty().withMessage('Preencha esse campo!').bail()
    .isEmail().withMessage('Deve preencher um Email válido!'),

    check('senha')
    .notEmpty().withMessage('Preencha esse campo!').bail()
    .isLenght({min: 6}).withMessage('Sua senha deve ter pelo menos 6 caracteres!')    
]

module.exports = validateRegister;