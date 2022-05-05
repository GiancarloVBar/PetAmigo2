
const IndexController = {
    indexView: (req,res)=>{
        res.render('index', { title: 'PetAmigo' });
    },
    testeView: (req,res)=>{
        res.render('teste', { title: 'TESTE' });
    },
    searchView: (req,res)=>{
        res.render('search', { title: 'Procura' });
    }
}

module.exports = IndexController;