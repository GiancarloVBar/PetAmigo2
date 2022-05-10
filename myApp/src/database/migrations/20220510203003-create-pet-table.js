'use strict'

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('pets', {
         id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
         },
         ong_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: 'ongs', Key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
         },
         nome: {
            type: Sequelize.STRING(45),
            allowNull: false
         },
         idade: {
            type: Sequelize.INTEGER(2),
            allowNull: false
         },
         especie: {
            type: Sequelize.STRING(45),
            allowNull: false
         },
         raca: {
            type: Sequelize.STRING(45),
            allowNull: false
         },
         tamanho: {
            type: Sequelize.STRING(45),
            allowNull: false
         },
         cor: {
            type: Sequelize.STRING(45),
            allowNull: false
         },
         nascimento: {
            type: Sequelize.DATE(),
            allowNull: false
         },
         sexo: {
            type: Sequelize.STRING(1),
            allowNull: true
         },
         created_at: {
            type: Sequelize.DATE(),
            allowNull: false
         },
         updated_at: {
            type: Sequelize.DATE(),
            allowNull: false
         }
      })
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('pets')
   }
}
