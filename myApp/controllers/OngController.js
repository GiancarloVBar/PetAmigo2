const Ong = require('../models/Ongs');
const Pet = require('../models/Pets');

module.exports = {
     store: async(req,res) => {
        const { razao_social,
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
                tipo_local } = req.body;

        await Ong.create({
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
                tipo_local });

        res.redirect('login')
    },
    getOngs: async (req,res)=>{
        const Ongs = await Ong.findAll({
        });
        return res.json(Ongs)
    }
}