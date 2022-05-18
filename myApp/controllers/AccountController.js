const AccountController = {
    accountpfView: (req,res)=>{
        res.render('accountpf', {
            title: 'Minha Conta - PF',
            usuario: req.session.usuario,
            ong: req.session.ong,
            nome: req.session.usuario.nome,
            email: req.session.usuario.email,
            cpf: req.session.usuario.cpf,
            nascimento: new Date(req.session.usuario.nascimento).toJSON().slice(0, 10),
            celular: req.session.usuario.celular,
            senha: req.session.usuario.senha,
            profissao: req.session.usuario.profissao,
            alergias: req.session.usuario.alergias,
            criancas: req.session.usuario.criancas,
            outros_pets: req.session.usuario.outros_pets,
            cep: req.session.usuario.addresses[0].cep,
            endereco: req.session.usuario.addresses[0].endereco,
            numero: req.session.usuario.addresses[0].numero,
            complemento: req.session.usuario.addresses[0].complemento,
            bairro: req.session.usuario.addresses[0].bairro,
            cidade: req.session.usuario.addresses[0].cidade,
            estado: req.session.usuario.addresses[0].estado,
            tipo_local: req.session.usuario.addresses[0].tipo_local
        });
    },
    accountongView: (req,res)=>{
        res.render('accountong',{
            title: 'Minha Conta - ONG',
            usuario: req.session.usuario,
            ong: req.session.ong,
            razao_social: req.session.ong.razao_social,
            email: req.session.ong.email,
            responsavel: req.session.ong.responsavel,
            cnpj: req.session.ong.cnpj,
            telefone: req.session.ong.telefone,
            celular: req.session.ong.celular,
            senha: req.session.ong.senha,
            anos_de_funcionamento: req.session.ong.anos_de_funcionamento,
            quantidade_animais: req.session.ong.quantidade_animais,
            historia: req.session.ong.historia,
            cep: req.session.ong.address.cep,
            endereco: req.session.ong.address.endereco,
            numero: req.session.ong.address.numero,
            complemento: req.session.ong.address.complemento,
            bairro: req.session.ong.address.bairro,
            cidade: req.session.ong.address.cidade,
            estado: req.session.ong.address.estado,
            tipo_local: req.session.ong.address.tipo_local
        });
    }
}

module.exports = AccountController;