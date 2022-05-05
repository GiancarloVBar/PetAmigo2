const { Model, DataTypes } = require('sequelize');

class userAdress extends Model {
    static init(connection) {
        super.init({
            id_endereco_pessoa: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
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
}

module.exports = userAdress;