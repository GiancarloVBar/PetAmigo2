'use strict'

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('ongs','celular')
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('ongs','celular')
   }
}
