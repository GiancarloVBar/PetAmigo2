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
            celular: {
                type: DataTypes.INTEGER(12),
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
            }
        },{
            sequelize: connection,
            freezeTableName: true
        })
    }

    static associate(models) {
        this.hasMany(models.pets, {
            foreignKey: "ong_id",
            as: "pets"
        }),
        this.hasOne(models.ongAddress, {
            foreignKey: "ong_id",
            as: "address"
        })
    }

}

module.exports = ongs;