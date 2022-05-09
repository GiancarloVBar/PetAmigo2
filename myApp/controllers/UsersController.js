const User = require('../models/Users')

module.exports ={
    async store(req,res) {
        const { nome, email, cpf, nascimento, celular, senha, profissao, alergias, criancas, outros_pets } = req.body;

        const user = await User.create({ nome, email, cpf, nascimento, celular, senha, profissao, alergias, criancas, outros_pets });
        return res.json(user)
    }
}