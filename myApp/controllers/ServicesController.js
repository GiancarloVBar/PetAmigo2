const ServicesController = {
    servicesView: (req,res)=>{
        res.render('services', { title: 'Serviços' });
    },
    vetView: (req,res)=>{
        res.render('./vetService', {title:'Serviços Vet'})
    },
    dogWalkingView: (req,res)=>{
        res.render('./dogWalkingService', {title:'Serviços Dog Walking'})
    },
    petShopView: (req,res)=>{
        res.render('./petshopService', {title:'Serviços Pet Shop'})
    },
    babaView: (req,res)=>{
        res.render('./babaservices',{title: 'Serviços de Babá'})
    } 
}

module.exports = ServicesController;