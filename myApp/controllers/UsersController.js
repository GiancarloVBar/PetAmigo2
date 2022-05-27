const User = require('../models/Users');
const { validationResult } = require('express-validator');


module.exports = {
     store: async(req,res) => {
          const errors = validationResult(req);

        if(!errors.isEmpty()){
            req.flash('errors', errors.mapped());
            req.flash('values', req.body);

               return res.redirect('signuppf');
        }
        const {
             nome,
             email,
             cpf,
             nascimento,
             celular,
             senha,
             profissao,
             alergias,
             criancas,
             outros_pets,
             cep,
             endereco,
             numero,
             complemento,
             bairro, 
             cidade,
             estado,
             tipo_local } = req.body;
                             
        const users = await User.create({
             nome,
             email,
             cpf,
             nascimento,
             celular, 
             senha,
             profissao,
             alergias, 
             criancas,
             outros_pets,
             cep,
             endereco, 
             numero,
             complemento,
             bairro,
             cidade,
             estado,
             tipo_local 
        });

        res.redirect('login')
    },
    
    getUsers: async (req,res)=>{
        const Users = await User.findAll({
            
        });
        return res.render('getusers',{ Users })
    }
}