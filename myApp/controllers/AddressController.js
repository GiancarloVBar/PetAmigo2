const Address = require('../models/UsersAddresses');
const User = require('../models/Users');

module.exports = {
    async address_store(req,res){
        const { user_id } = req.params;
        const { endereco, numero, complemento, bairro, cidade, estado, tipo_local } = req.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json( { error: 'Usuário não encontrado' });
            const address = await Address.create({
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
        }
    }
}