const AccountController = {
    accountpfView: (req,res)=>{
        res.render('accountpf', { title: 'Minha Conta - PF' });
    },
    accountongView: (req,res)=>{
        res.render('accountong',{ title: 'Minha Conta - ONG' } )
    }
}

module.exports = AccountController;