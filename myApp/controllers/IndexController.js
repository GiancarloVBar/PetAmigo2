const  { siglas, nomeEstados, menuTamanho, menuPet }  = require('../public/javascripts/info')

const IndexController = {
    indexView: (req,res)=>{
        
        res.render('index', {
            title: 'PetAmigo',
            menuPet,
            menuTamanho,
            siglas,
            nomeEstados,
            usuario: req.session.usuario
        });
    }, 
    searchView: (req,res)=>{
        res.render('teste', {title: 'Search'});
    }

    
}

module.exports = IndexController;