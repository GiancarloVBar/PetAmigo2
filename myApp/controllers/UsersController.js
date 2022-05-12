const User = require('../models/Users');

module.exports = {
     store: async(req,res) => {
        const { nome, email, cpf, nascimento, celular, senha, profissao, alergias, criancas, outros_pets, cep,  endereco, numero, complemento, bairro, cidade, estado, tipo_local } = req.body;
        const users = await User.create({ nome, email, cpf, nascimento, celular, senha, profissao, alergias, criancas, outros_pets,cep,  endereco, numero, complemento, bairro, cidade, estado, tipo_local });

        res.redirect('login', { users })
    },
    getUsers: async (req,res)=>{
        const Users = await User.findAll({
            
        });
        return res.render('getusers',{ Users })
    }
}