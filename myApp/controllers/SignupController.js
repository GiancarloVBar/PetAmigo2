const SignupController = {
    signuppfView: (req,res)=>{
        res.render('signuppf', {
            title: 'Registrar - PF',
            usuario: req.session.usuario,
            ong: req.session.ong
        });
    },
    signupongView: (req,res)=>{
        res.render('signupong',{
            title: 'Registrar - ONG',
            usuario: req.session.usuario,
            ong: req.session.ong
        });
    }
}

module.exports = SignupController;