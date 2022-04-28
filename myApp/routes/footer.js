const express = require('express');
const router = express.Router();
const FooterController = require('../controllers/FooterController');

/* GET home page. */
router.get('/comofunciona', FooterController.comoFuncionaView);
router.get('/faq', FooterController.FAQView);
router.get('/politica', FooterController.politicaDevolucoesView);
router.get('/historia', FooterController.nossaHistoriaView);
router.get('/ajuda', FooterController.ajudaView);
router.get('/pagamentos', FooterController.metodosPagamentoView);

module.exports = router;
