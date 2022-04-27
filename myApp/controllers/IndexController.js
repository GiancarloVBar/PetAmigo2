
const IndexController = {
    indexView: (req,res)=>{
        res.render('index', { title: 'PetAmigo' });
    }
}

module.exports = IndexController;