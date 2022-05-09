const  { siglas, nomeEstados, menuTamanho, menuPet }  = require('../public/javascripts/info')

const IndexController = {
    indexView: (req,res)=>{
        console.log(req.session.usuario)
        res.render('index', {
            title: 'PetAmigo',
            menuPet,
            menuTamanho,
            siglas,
            nomeEstados,
            usuario: req.session.usuario
        });
    },
    
}

module.exports = IndexController;