const User = require('../models/Users')
const Ong = require('../models/Ongs')

const AccountController = {
    accountpfView: (req,res)=>{
        erro = req.session.erro;
        sucesso = req.session.sucesso;
        delete req.session.sucesso;
        delete req.session.erro;
        res.render('accountpf', {
            title: 'Minha Conta - PF',
            usuario: req.session.usuario,
            ong: req.session.ong,
            erro,
            sucesso,
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
            cep: req.session.usuario.addresses[0]?.cep,
            endereco: req.session.usuario.addresses[0]?.endereco,
            numero: req.session.usuario.addresses[0]?.numero,
            complemento: req.session.usuario.addresses[0]?.complemento,
            bairro: req.session.usuario.addresses[0]?.bairro,
            cidade: req.session.usuario.addresses[0]?.cidade,
            estado: req.session.usuario.addresses[0]?.estado,
            tipo_local: req.session.usuario.addresses[0]?.tipo_local
        });
    },
    async updatePasswordAccountpf(req, res) {
        const { id } = req.params;
        const {senha_antiga, nova_senha, confirmar_senha} = req.body;

        if (nova_senha == confirmar_senha) {
            const updated = await User.update(
                {senha: nova_senha},
                {where: {
                    id,
                    senha: senha_antiga
                }}
            );

            if (updated > 0) {
                req.session.sucesso = 'Senha alterada com sucesso';
                return res.redirect("/accountpf");
            } else {
                req.session.erro = 'Verifique as senhas informadas e tente novamente';
                return res.redirect("/accountpf");
            }
        } else {
            req.session.erro = 'Verifique as senhas informadas e tente novamente';
            return res.redirect("/accountpf");
        }
    },
    async deleteAccountpf(req, res) {
        const { id } = req.params;
        deleted = await User.destroy({
            where: {
                id
            }
        });

        if (deleted) {
            delete req.session.usuario;
        }
        return res.redirect("/");
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
            cep: req.session.ong.address?.cep,
            endereco: req.session.ong.address?.endereco,
            numero: req.session.ong.address?.numero,
            complemento: req.session.ong.address?.complemento,
            bairro: req.session.ong.address?.bairro,
            cidade: req.session.ong.address?.cidade,
            estado: req.session.ong.address?.estado,
            tipo_local: req.session.ong.address?.tipo_local
        });
    }
}

module.exports = AccountController;