const { Model, DataTypes } = require('sequelize');

class pet extends Model {
    static init(connection) {
        super.init({
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
                type: DataTypes.DATE(/* verificar */),
                allowNull: false
            },
            sexo: {
                type: DataTypes.STRING(1),
                allowNull: true
            }
        },{
            sequelize: connection
        })
    }

    static associate(models) {
        this.belongsTo(model.user, {
            foreignKey: "user_id",
            as: "pet_user"
        }),
        this.belongsTo(model.ong, {
            foreignKey: "ong_id",
            as: "pet_ong"
        })
    }
}

module.exports = pet;