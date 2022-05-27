const SearchController = {
   searchView: (req, res) => {
      res.render('search', {
         title: 'Search - PetAmigo'
      })
   },

   verMaisView: (req, res) => {
      res.render('verMais', { title: 'Ver Mais' })
   }
}

module.exports = SearchController
