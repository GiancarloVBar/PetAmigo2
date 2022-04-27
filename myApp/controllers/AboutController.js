const AboutController = {
    aboutView: (req,res)=>{
        res.render('about', { title: 'Sobre - PetAmigo' });
    }
}

module.exports = AboutController;