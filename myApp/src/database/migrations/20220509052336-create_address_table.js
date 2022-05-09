'use strict';

const { sequelize } = require("../../../models/Users");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('useraddress',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull:false,
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: { model: 'users', Key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      cep: {
        type: Sequelize.INTEGER(8),
        allowNull: false
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
    },
    updated_at:{
      type:Sequelize.DATE(),
      allowNull: false,
    }

     
    })
  },

  down: (queryInterface, Sequelize) =>{
    return queryInterface.dropTable('useraddress');
  }
};
