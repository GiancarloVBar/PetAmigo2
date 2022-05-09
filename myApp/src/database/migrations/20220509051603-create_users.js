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
        allowNull: false
    },
    outros_pets: {
        type: Sequelize.STRING(100),
        allowNull: false
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
    return queryInterface.dropTable('users');
  }
};
