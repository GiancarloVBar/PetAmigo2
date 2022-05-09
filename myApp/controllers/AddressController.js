const Address = require('../models/UsersAddresses');
const User = require('../models/Users');

module.exports = {
    async address_store(req,res){
        const { user_id } = req.params;
        const {cep,  endereco, numero, complemento, bairro, cidade, estado, tipo_local } = req.body;

        const user = await User.findByPk(user_id);

        // if(!user) {
        //     return res.status(400).json( { error: 'Usuário não encontrado' });
        //     }else{

            const address = await Address.create({
                cep,
                endereco,
                numero,
                complemento,
                bairro,
                cidade,
                estado,
                tipo_local,
                user_id
            });
            return res.json(address)
    },
    async index (req,res) {
        const { user_id } = req.params;
        const user = await User.findByPk(user_id,{
            include: { association: 'addresses' }
        });
        res.json(user)

    }
}