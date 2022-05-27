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

getPets: async(req,res)=>{
    const { ongs_id } = req.params;
    const ongs = await Ong.findByPk(ongs_id, {
        include: {
            association: 'ongs_pets'
        }
    });

    return res.json(ongs)
},

search: async(req,res)=>{
    const { pet, tamanho, localizacao  } = req.body

    try{
       
       const pets = await Pet.findAll({
        
           include:{
               association: 'ongs_pets',
               attributes:['estado'],
               where:{
                     estado: localizacao 
               }
            },
            where:{
                especie: pet,
                tamanho
            }
        })
        await res.render('search', {
             title: 'Search - PetAmigo',
             pets
             })
             console.log(pets);
    }
    catch(err){
        return res.json(err)
    }
}

}