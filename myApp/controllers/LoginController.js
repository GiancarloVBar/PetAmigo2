const User = require('../models/Users')
const Ong = require('../models/Ongs')
const { validationResult } = require('express-validator')

const LoginController = {
    loginView: (req, res)=>{
        error = req.session.erro;
        delete req.session.erro;

        const [ errors ] = req.flash('errors');
        const [ values ] = req.flash('values');

        res.render('login', { 
            title: 'Login - PetAmigo',
            error,
            usuario: req.session.usuario,
            ong: req.session.ong,
            errors,
            values
        });
    },

    async login(req, res) {

        const errors = validationResult(req);

        if(!errors.isEmpty()){
            req.flash('errors', errors.mapped());
            req.flash('values', req.body);

            return res.redirect('/login')
        }

        const {email, senha} = req.body;

        const usuario = await User.findOne({
            where: {
                email: email,
                senha: senha
            },
        });

        if (usuario !== null) {
            req.session.usuario = usuario;
            return res.redirect("/");
        } else {
            const ong = await Ong.findOne({
                where: {
                    email,
                    senha
                }
            });

            if (ong !== null) {
                req.session.ong = ong;
                return res.redirect("/");
            } else {
                req.session.erro = 'Nome de usuário ou senha incorretos';
                return res.redirect("/login");
            }
        }

    }
}

module.exports = LoginController;