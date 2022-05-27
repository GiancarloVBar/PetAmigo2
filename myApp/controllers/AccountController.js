const User = require('../models/Users')
const Ong = require('../models/Ongs')

const AccountController = {
    accountPfView: (req,res)=>{
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
            cep: req.session.usuario.cep,
            endereco: req.session.usuario.endereco,
            numero: req.session.usuario.numero,
            complemento: req.session.usuario.complemento,
            bairro: req.session.usuario.bairro,
            cidade: req.session.usuario.cidade,
            estado: req.session.usuario.estado,
            tipo_local: req.session.usuario.tipo_local,
        });
    },
    async updatePfAccount(req, res) {
            const { id } = req.params;
            
            const {
                nome,
                email,
                cpf,
                nascimento,
                celular,
                profissao,
                alergias,
                criancas,
                outros_pets,
                cep,
                endereco,
                numero,
                complemento,
                bairro, 
                cidade,
                estado,
                tipo_local
            } = req.body;
    
            await User.update({
                nome,
                email,
                cpf,
                nascimento,
                celular,
                profissao,
                alergias,
                criancas,
                outros_pets,
                cep,
                endereco,
                numero,
                complemento,
                bairro, 
                cidade,
                estado,
                tipo_local
            },
            {
              where: {id}
            });
            
            res.redirect('/accountpf')
    },
    async updateOngAccount(req, res) {
        const { id } = req.params;
        
        const {
            razao_social,
            email, 
            responsavel,
            cnpj,
            telefone,
            senha,
            anos_de_funcionamento,
            quantidade_animais,
            historia,
            cep,
            endereco,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
            tipo_local
        } = req.body;

        await Ong.update({
            razao_social,
            email,
            responsavel,
            cnpj,
            telefone,
            senha,
            anos_de_funcionamento,
            quantidade_animais,
            historia,
            cep,
            endereco,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
            tipo_local
        },
        {
          where: {id}
        });
        
        res.redirect('/accountong')
    },
    async updatePasswordAccountPf(req, res) {
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
    async updatePasswordAccountOng(req, res) {
        const { id } = req.params;
        const {senha_antiga, nova_senha, confirmar_senha} = req.body;

        if (nova_senha == confirmar_senha) {
            const updated = await Ong.update(
                {senha: nova_senha},
                {where: {
                    id,
                    senha: senha_antiga
                }}
            );

            if (updated > 0) {
                req.session.sucesso = 'Senha alterada com sucesso';
                return res.redirect("/accountong");
            } else {
                req.session.erro = 'Verifique as senhas informadas e tente novamente';
                return res.redirect("/accountong");
            }
        } else {
            req.session.erro = 'Verifique as senhas informadas e tente novamente';
            return res.redirect("/accountong");
        }
    },
    async deleteAccountPf(req, res) {
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
    async deleteAccountOng(req, res) {
        const { id } = req.params;
        deleted = await Ong.destroy({
            where: {
                id
            }
        });

        if (deleted) {
            delete req.session.usuario;
        }
        return res.redirect("/");
    },
    accountOngView: (req, res) => {
        res.render('accountong', {
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
            cep: req.session.ong.cep,
            endereco: req.session.ong.endereco,
            numero: req.session.ong.numero,
            complemento: req.session.ong.complemento,
            bairro: req.session.ong.bairro,
            cidade: req.session.ong.cidade,
            estado: req.session.ong.estado,
            tipo_local: req.session.ong.tipo_local
        });
    },

    petsOngView: (req, res) => {
        res.render('petsOng', {
            title: 'Pets ONG',
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
            cep: req.session.ong.cep,
            endereco: req.session.ong.endereco,
            numero: req.session.ong.numero,
            complemento: req.session.ong.complemento,
            bairro: req.session.ong.bairro,
            cidade: req.session.ong.cidade,
            estado: req.session.ong.estado,
            tipo_local: req.session.ong.tipo_local
        })
    },
    petsOngEditarView: (req, res) => {
        res.render('petsOngEditar', {
            title: 'Pets ONG Editar',
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
            cep: req.session.ong.cep,
            endereco: req.session.ong.endereco,
            numero: req.session.ong.numero,
            complemento: req.session.ong.complemento,
            bairro: req.session.ong.bairro,
            cidade: req.session.ong.cidade,
            estado: req.session.ong.estado,
            tipo_local: req.session.ong.tipo_local
        })
    },
    petsOngCadastrarView: (req, res) => {
        res.render('petsOngCadastrar', {
            title: 'Pets ONG Cadastrar',
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
            cep: req.session.ong.cep,
            endereco: req.session.ong.endereco,
            numero: req.session.ong.numero,
            complemento: req.session.ong.complemento,
            bairro: req.session.ong.bairro,
            cidade: req.session.ong.cidade,
            estado: req.session.ong.estado,
            tipo_local: req.session.ong.tipo_local
        })
    }
}

module.exports = AccountController;