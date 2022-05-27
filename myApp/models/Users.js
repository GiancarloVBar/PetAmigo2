const { Model,  DataTypes } = require('sequelize');

class users extends Model {
    static init(connection) {
        super.init({
            nome: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(45),
                allowNull: false
            },
            cpf: {
                type: DataTypes.STRING(14),
                allowNull: false
            },
            nascimento: {
                type: DataTypes.DATE(),
                allowNull: false
            },
            celular: {
                type: DataTypes.INTEGER(11),
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING(45),
                allowNull: false
            },
            profissao: {
                type: DataTypes.STRING(45),
                allowNull: false
            },
            alergias: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            criancas: {
                type: DataTypes.STRING(45),
                allowNull: false
            },
            outros_pets: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            cep: {
                type: DataTypes.STRING(8),
                allowNull: true
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
}

module.exports = users;