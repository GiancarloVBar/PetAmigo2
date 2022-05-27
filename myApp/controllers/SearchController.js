const {
   siglas,
   nomeEstados,
   menuTamanho,
   menuPet
} = require('../public/javascripts/info')

const SearchController = {
   searchView: (req, res) => {
      res.render('search', {
         title: 'Search - PetAmigo',
         menuPet,
         menuTamanho,
         siglas,
         nomeEstados,
         usuario: req.session.usuario,
         ong: req.session.ong
      })
   },

   verMaisView: (req, res) => {
      res.render('verMais', {
         title: 'Ver Mais',
         usuario: req.session.usuario,
         ong: req.session.ong
      })
   }
}

module.exports = SearchController
