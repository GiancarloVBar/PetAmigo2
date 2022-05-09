const SignupController = {
    signuppfView: (req,res)=>{
        res.render('signuppf', {
            title: 'Registrar - PF',
            usuario: req.session.usuario
        });
    },
    signupongView: (req,res)=>{
        res.render('signupong',{
            title: 'Registrar - ONG',
            usuario: req.session.usuario
        });
    }
}

module.exports = SignupController;