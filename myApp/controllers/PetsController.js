const Ong = require('../models/Ongs');
const Pet = require('../models/Pets');

module.exports = {
petStore: async(req,res)=>{
    const { ongs_id } = req.params;
    
    const { nome,
            idade,
            especie,
            raca,
            tamanho,
            cor,
            nascimento,
            sexo } = req.body;

    const ong = await Ong.findByPk(ongs_id);

    if(!ong) {
        return res.status(400).json({ error: 'Ong não encontrada!'});
    }

    const pet = await Pet.create({
                nome,
                idade,
                especie,
                raca,
                tamanho,
                cor,
                nascimento,
                sexo,
                ongs_id
    })

    return res.json(pet)
},



search: async(req, res) => {
    const { pet, tamanho, localizacao } = req.body

    let pets = [];
    try {
        if (localizacao) {
            let where = {}

            if (pet) {
                where.especie = pet
            }

            if (tamanho) {
                where.tamanho = tamanho
            }

            pets = await Pet.findAll({
                include: {
                    association: 'ongs_pets',
                    attributes: ['estado'],
                    where: {
                       estado: localizacao 
                    }
                },
                where
            })
        } else {
            let where = {}

            if (pet) {
                where.especie = pet
            }

            if (tamanho) {
                where.tamanho = tamanho
            }

            pets = await Pet.findAll({
                where
            })
        }
        
        await res.render('search', {
            title: 'Search - PetAmigo',
            usuario: req.session.usuario,
            ong: req.session.ong,
            pets
        });
    }
    catch(err){
        return res.json(err)
    }
}

}