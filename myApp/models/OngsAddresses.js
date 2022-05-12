const { Model, DataTypes } = require('sequelize');

class ongAddress extends Model {
    static init(connection) {
        super.init({
            cep: {
                type: DataTypes.INTEGER(8),
                allowNull: false
            },
            endereco: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            numero: {
                type: DataTypes.STRING(5),
                allowNull: false
            },
            complemento: {
                type: DataTypes.STRING(45),
                allowNull: true
            },
            bairro: {
                type: DataTypes.STRING(45),
                allowNull: false
            },
            cidade: {
                type: DataTypes.STRING(45),
                allowNull: false
            },
            estado: {
                type: DataTypes.STRING(2),
                allowNull: false
            },
            tipo_local: {
                type: DataTypes.STRING(45),
                allowNull: false
            }

        },{
            sequelize: connection,
            freezeTableName: true

        })
    }

    static associate(models) {
        this.hasMany(models.ongs, {
            foreignKey: "ong_id",
            as: "ong_ongAddress"
        })
    }

}

module.exports = ongAddress;