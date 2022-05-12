const User = require('../models/Users')

const LoginController = {
    loginView: (req, res)=>{
        error = req.session.erro;
        delete req.session.erro;
        res.render('login', { 
            title: 'Login - PetAmigo',
            error: error,
            usuario: req.session.usuario
        });
    },

    async login(req, res) {
        email = req.body.email;
        senha = req.body.senha;

        
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
            req.session.erro = 'Nome de usuário ou senha incorretos';
            return res.redirect("/login");
        }

    }
}

module.exports = LoginController;