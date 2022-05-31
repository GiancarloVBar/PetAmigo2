'use strict';

module.exports = {
   up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('pets', {
     id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       primaryKey: true
      
      },
     ongs_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'ongs', key: 'id'},
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
     foto: {
        type: Sequelize.STRING(255),
        allowNull: false
     },
     created_at: {
      type: Sequelize.DATE(),
      allowNull: false,
      defaultValue: Sequelize.fn('now'),
    },
    updated_at:{
      type:Sequelize.DATE(),
      allowNull: false,
      defaultValue: Sequelize.fn('now'),
    }
    }) 
  },

    down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pets');
    }
};
