const { Model, DataTypes } = require('sequelize')

class pets extends Model {
   static init(connection) {
      super.init(
         {
            nome: {
               type: DataTypes.STRING(45),
               allowNull: false
            },
            idade: {
               type: DataTypes.INTEGER(2),
               allowNull: false
            },
            especie: {
               type: DataTypes.STRING(45),
               allowNull: false
            },
            raca: {
               type: DataTypes.STRING(45),
               allowNull: false
            },
            tamanho: {
               type: DataTypes.STRING(45),
               allowNull: false
            },
            cor: {
               type: DataTypes.STRING(45),
               allowNull: false
            },
            nascimento: {
               type: DataTypes.DATE(),
               allowNull: false
            },
            sexo: {
               type: DataTypes.STRING(1),
               allowNull: true
            },
            created_at: {
               type: DataTypes.DATE,
            },
            updated_at: {
               type: DataTypes.DATE,
            },
         },
         {
            sequelize: connection,
            freezeTableName: true
         }
      )
   }
   static associate(models){
      this.belongsTo(models.ongs, {
          foreignKey: 'ongs_id',
          as: 'ongs_pets'  
      })
   }
   
}

module.exports = pets
