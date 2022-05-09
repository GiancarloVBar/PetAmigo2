const AboutController = {
    aboutView: (req,res)=>{
        res.render('about', {
            title: 'Sobre - PetAmigo',
            usuario: req.session.usuario
        });
    }
}

module.exports = AboutController;