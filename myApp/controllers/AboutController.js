const AboutController = {
    aboutView: (req,res)=>{
        res.render('about', {
            title: 'Sobre - PetAmigo',
            usuario: req.session.usuario,
            ong: req.session.ong
        });
    }
}

module.exports = AboutController;