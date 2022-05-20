const { Model, DataTypes } = require('sequelize');

class ongs extends Model {
    static init(connection) {
        super.init({
            razao_social: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(45),
                allowNull: false
            },
            responsavel: {
                type: DataTypes.STRING(45),
                allowNull: false
            },
            cnpj: {
                type: DataTypes.STRING(14),
                allowNull: false
            },
            telefone: {
                type: DataTypes.INTEGER(11),
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING(45),
                allowNull: false
            },
            anos_de_funcionamento: {
                type: DataTypes.INTEGER(2),
                allowNull: true
            },
            quantidade_animais: {
                type: DataTypes.INTEGER(4),
                allowNull: true
            },
            historia: {
                type: DataTypes.STRING(1234),
                allowNull: true
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

module.exports = ongs;