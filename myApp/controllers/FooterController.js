const FooterController = {
    comoFuncionaView: (req,res)=>{
        res.render('./comoFunciona', {
            title: 'Como Funciona',
            usuario: req.session.usuario,
            ong: req.session.ong
        });
    },
    FAQView: (req,res)=>{
        res.render('./faq', {
            title: 'FAQ',
            usuario: req.session.usuario,
            ong: req.session.ong
        });
    },
    politicaDevolucoesView: (req,res)=>{
        res.render('./politica', {
            title: 'Política de Devoluções',
            usuario: req.session.usuario,
            ong: req.session.ong
        });
    },
    nossaHistoriaView: (req,res)=>{
        res.render('./historia', {
            title: 'Nossa História',
            usuario: req.session.usuario,
            ong: req.session.ong
        });
    },
    ajudaView: (req,res)=>{
        res.render('./ajuda', {
            title: 'Ajuda',
            usuario: req.session.usuario,
            ong: req.session.ong
        });
    },
    metodosPagamentoView: (req,res)=>{
        res.render('./pagamentos', {
            title: 'Métodos de Pagamento',
            usuario: req.session.usuario,
            ong: req.session.ong
        });
    }
}

module.exports = FooterController;