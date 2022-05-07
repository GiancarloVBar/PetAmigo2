const { Model, DataTypes } = require('sequelize');

class pet extends Model {
    static init(connection) {
        super.init({
            nome: {
                type: DataType.STRING(45),
                allowNull: false
            },
            idade: {
                type: DataType.INTEGER(2),
                allowNull: false
            },
            especie: {
                type: DataType.STRING(45),
                allowNull: false
            },
            raca: {
                type: DataType.STRING(45),
                allowNull: false
            },
            tamanho: {
                type: DataType.STRING(45),
                allowNull: false
            },
            cor: {
                type: DataType.STRING(45),
                allowNull: false
            },
            nascimento: {
                type: DataType.DATE(/* verificar */),
                allowNull: false
            },
            sexo: {
                type: DataType.STRING(1),
                allowNull: true
            }
        },{
            sequelize: connection
        })
    }

    static associate(Model) {
        this.belongsTo(Model.user, {
            foreignKey: "user_id",
            as: "pet_user"
        }),
        this.belongsTo(Model.ong, {
            foreignKey: "ong_id",
            as: "pet_ong"
        })
    }
}

module.exports = pet;