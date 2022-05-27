const SignupController = {
    signuppfView: (req,res)=>{
        const [ errors ] = req.flash('errors');
        const [ values ] = req.flash('values');

        res.render('signuppf', {
            title: 'Registrar - PF',
            usuario: req.session.usuario,
            ong: req.session.ong,
            errors,
            values
        });
    },
    signupongView: (req,res)=>{

        const [ errors ] = req.flash('errors');
        const [ values ] = req.flash('values');

        res.render('signupong',{
            title: 'Registrar - ONG',
            usuario: req.session.usuario,
            ong: req.session.ong,
            errors,
            values
        });
    }
}

module.exports = SignupController;