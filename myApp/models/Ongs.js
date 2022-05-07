const { Model, DataTypes } = require('sequelize');

class ong extends Model {
    static init(connection) {
        super.init({
            razao_social: {
                type: DataType.STRING(100),
                allowNull: false
            },
            email: {
                type: DataType.STRING(45),
                allowNull: false
            },
            responsavel: {
                type: DataType.STRING(45),
                allowNull: false
            },
            cnpj: {
                type: DataType.STRING(14),
                allowNull: false
            },
            telefone: {
                type: DataType.INTEGER(11),
                allowNull: false
            },
            celular: {
                type: DataType.INTEGER(12),
                allowNull: false
            },
            senha: {
                type: DataType.STRING(45),
                allowNull: false
            },
            anos_de_funcionamento: {
                type: DataType.INTEGER(2),
                allowNull: true
            },
            quantidade_animais: {
                type: DataType.INTEGER(4),
                allowNull: true
            },
            historia: {
                type: DataType.STRING(1234),
                allowNull: true
            }
        },{
            sequelize: connection
        })
    }
}

module.exports = ong;