const ContactController = {
    contactView: (req,res)=>{
        res.render('contact', {
            title: 'Contato - PetAmigo',
            usuario: req.session.usuario,
            ong: req.session.ong
        });
    }
}

module.exports = ContactController;