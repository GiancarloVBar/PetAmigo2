'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ongs',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull:false,
      },
      razao_social: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      email: {
          type: Sequelize.STRING(45),
          allowNull: false
      },
      responsavel: {
          type: Sequelize.STRING(45),
          allowNull: false
      },
      cnpj: {
          type: Sequelize.STRING(14),
          allowNull: false
      },
      telefone: {
          type: Sequelize.INTEGER(11),
          allowNull: false
      },
      celular: {
          type: Sequelize.INTEGER(12),
          allowNull: false
      },
      senha: {
          type: Sequelize.STRING(45),
          allowNull: false
      },
      anos_de_funcionamento: {
          type: Sequelize.INTEGER(2),
          allowNull: true
      },
      quantidade_animais: {
          type: Sequelize.INTEGER(4),
          allowNull: true
      },
      historia: {
          type: Sequelize.STRING(1234),
          allowNull: true
      },
      created_at: {
        type: Sequelize.DATE(),
        allowNull: false,
      },
      updated_at:{
        type:Sequelize.DATE(),
        allowNull: false,
      }
    })
  },

  down: (queryInterface, Sequelize) =>{
    return queryInterface.dropTable('ongs');
  }
};