const LoginController = {
    loginView: (req,res)=>{
        res.render('login', { title: 'Login - PetAmigo' });
    }
}

module.exports = LoginController;