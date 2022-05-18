const User = require('../models/Users')
const Ong = require('../models/Ongs')
const database = require('../src/database')

const LoginController = {
    loginView: (req, res)=>{
        error = req.session.erro;
        delete req.session.erro;
        res.render('login', { 
            title: 'Login - PetAmigo',
            error: error,
            usuario: req.session.usuario,
            ong: req.session.ong
        });
    },

    async login(req, res) {
        const {email, senha} = req.body;

        const usuario = await User.findOne({
            include: [
                {model: database.model('useraddress'), as: 'addresses'}
            ],
            where: {
                email,
                senha
            }
        });

        if (usuario !== null) {
            req.session.usuario = usuario;
            return res.redirect("/");
        } else {
            const ong = await Ong.findOne({
                include: [
                    {model: database.model('ongAddress'), as: 'address'}
                ],
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