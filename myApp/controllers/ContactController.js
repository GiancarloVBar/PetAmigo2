const ContactController = {
    contactView: (req,res)=>{
        res.render('contact', { title: 'Contato - PetAmigo' });
    }
}

module.exports = ContactController;