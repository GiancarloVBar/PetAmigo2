const SignuppfController = {
    signuppfView: (req,res)=>{
        res.render('signuppf', { title: 'Cadastro PF - PetAmigo' });
    }
}

module.exports = SignuppfController;