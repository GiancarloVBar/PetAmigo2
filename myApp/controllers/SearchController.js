const SearchController = {
   searchView: (req, res) => {
      res.render('search', {
         title: 'Search - PetAmigo',
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
