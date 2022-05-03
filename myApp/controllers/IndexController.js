
const IndexController = {
    indexView: (req,res)=>{
        res.render('index', { title: 'PetAmigo' });
    },
    testeView: (req,res)=>{
        res.render('teste', { title: 'TESTE' });
    }
}

module.exports = IndexController;