'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull:false,
      },
      nome: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      email: {
          type: Sequelize.STRING(45),
          allowNull: false
      },
      cpf: {
          type: Sequelize.STRING(14),
          allowNull: false
      },
      nascimento: {
          type: Sequelize.DATE(),
          allowNull: false
      },
      celular: {
          type: Sequelize.INTEGER(11),
          allowNull: false
      },
      senha: {
          type: Sequelize.STRING(45),
          allowNull: false
      },
      profissao: {
          type: Sequelize.STRING(45),
          allowNull: false
      },
      alergias: {
          type: Sequelize.STRING(100),
          allowNull: true
      },
      criancas: {
          type: Sequelize.STRING(45),
          allowNull: true
      },
      outros_pets: {
          type: Sequelize.STRING(100),
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
    return queryInterface.dropTable('users');
  }
};
