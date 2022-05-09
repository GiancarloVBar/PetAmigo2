const AccountController = {
    accountpfView: (req,res)=>{
        res.render('accountpf', {
            title: 'Minha Conta - PF',
            usuario: req.session.usuario,
            nome: req.session.usuario.nome,
            email: req.session.usuario.email,
            cpf: req.session.usuario.cpf,
            nascimento: new Date(req.session.usuario.nascimento).toJSON().slice(0, 10),
            celular: req.session.usuario.celular,
            senha: req.session.usuario.senha,
            profissao: req.session.usuario.profissao,
            alergias: req.session.usuario.alergias,
            criancas: req.session.usuario.criancas,
            outros_pets: req.session.usuario.outros_pets
        });
    },
    accountongView: (req,res)=>{
        res.render('accountong',{
            title: 'Minha Conta - ONG',
            usuario: req.session.usuario
        });
    }
}

module.exports = AccountController;