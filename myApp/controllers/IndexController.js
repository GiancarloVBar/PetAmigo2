
const IndexController = {
    indexView: (req,res)=>{
        res.render('index', 
        {
             title: 'PetAmigo',
             menu: ['Cachorros', 'Gatos', 'Roedores', 'Pássaros', 'Capivaras', 'Iguanas', 'Ariranhas']
        });
    },
    
}

module.exports = IndexController;