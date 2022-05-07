const { Model, DataTypes } = require('sequelize');

class user extends Model {
    static init(connection) {
        super.init({
             nome: {
                type: DataType.STRING(50),
                allowNull: false
            },
            email: {
                type: DataType.INTEGER(45),
                allowNull: false
            },
            cpf: {
                type: DataType.STRING(14),
                allowNull: false
            },
            nascimento: {
                type: DataType.DATE(/* pesquisar */),
                allowNull: false
            },
            celular: {
                type: DataType.INTEGER(11),
                allowNull: false
            },
            senha: {
                type: DataType.STRING(45),
                allowNull: false
            },
            profissao: {
                type: DataType.STRING(45),
                allowNull: false
            },
            alergias: {
                type: DataType.STRING(100),
                allowNull: true
            },
            criancas: {
                type: DataType.STRING(45),
                allowNull: false
            },
            outros_pets: {
                type: DataType.STRING(100),
                allowNull: false
            }

        },{
            sequelize: connection
        })
    }
}

module.exports = user;