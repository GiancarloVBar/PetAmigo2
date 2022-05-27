const IndexController = {
    indexView: (req,res)=>{
        res.render('index', {
            title: 'PetAmigo',
            usuario: req.session.usuario,
            ong: req.session.ong
        });
    }, 
    searchView: (req,res)=>{
        res.render('teste', {title: 'Search'});
    }
}

module.exports = IndexController;