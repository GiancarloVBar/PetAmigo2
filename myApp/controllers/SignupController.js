const SignupController = {
    signuppfView: (req,res)=>{
        res.render('signuppf', { title: 'Registrar - PF' });
    },
    signupongView: (req,res)=>{
        res.render('signupong',{ title: 'Registrar - ONG' } )
    }
}

module.exports = SignupController;