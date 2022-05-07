const { Model, DataTypes } = require('sequelize');

class ongAddress extends Model {
    static init(connection) {
        super.init({
            cep: {
                type: DataType.INTEGER(8),
                allowNull: false
            },
            endereco: {
                type: DataType.STRING(100),
                allowNull: false
            },
            numero: {
                type: DataType.STRING(5),
                allowNull: false
            },
            complemento: {
                type: DataType.STRING(45),
                allowNull: true
            },
            bairro: {
                type: DataType.STRING(45),
                allowNull: false
            },
            cidade: {
                type: DataType.STRING(45),
                allowNull: false
            },
            estado: {
                type: DataType.STRING(2),
                allowNull: false
            },
            tipo_local: {
                type: DataType.STRING(45),
                allowNull: false
            }

        },{
            sequelize: connection
        })
    }

    static associate(Model) {
        this.hasMany(Model.ong, {
            foreignKey: "ong_id",
            as: "ong_ongAddress"
        })
    }

}

module.exports = ongsAddress;