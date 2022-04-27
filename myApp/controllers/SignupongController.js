const SignupongController = {
    signupongView: (req,res)=>{
        res.render('signupong', { title: 'Cadastro ONG - PetAmigo' });
    }
}

module.exports = SignupongController;