const FooterController = {
    comoFuncionaView: (req,res)=>{
        res.render('./comoFunciona', {title: 'Como Funciona'},)
    },
    FAQView: (req,res)=>{
        res.render('./faq', {title: 'FAQ'},)
    },
    politicaDevolucoesView: (req,res)=>{
        res.render('./politica', {title: 'Política de Devoluções'},)
    },
    nossaHistoriaView: (req,res)=>{
        res.render('./historia', {title: 'Nossa História'},)
    },
    ajudaView: (req,res)=>{
        res.render('./ajuda', {title: 'Ajuda'},)
    },
    metodosPagamentoView: (req,res)=>{
        res.render('./pagamentos', {title: 'Métodos de Pagamento'},)
    }
}

module.exports = FooterController;