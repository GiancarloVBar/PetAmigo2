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
      cep: {
        type: Sequelize.STRING(8),
        allowNull: true
      },
      endereco: {
          type: Sequelize.STRING(100),
          allowNull: false
      },
      numero: {
          type: Sequelize.STRING(5),
          allowNull: false
      },
      complemento: {
          type: Sequelize.STRING(45),
          allowNull: true
      },
      bairro: {
          type: Sequelize.STRING(45),
          allowNull: false
      },
      cidade: {
          type: Sequelize.STRING(45),
          allowNull: false
      },
      estado: {
          type: Sequelize.STRING(2),
          allowNull: false
      },
      tipo_local: {
          type: Sequelize.STRING(45),
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

  down: (queryInterface, Sequelize) =>{
    return queryInterface.dropTable('ongs');
  }
};
