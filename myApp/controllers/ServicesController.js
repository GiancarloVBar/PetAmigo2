const ServicesController = {
    servicesView: (req,res)=>{
        res.render('services', { title: 'Serviços - PetAmigo' });
    }
}

module.exports = ServicesController;