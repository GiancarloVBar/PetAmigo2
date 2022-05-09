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
            }

        },{
            sequelize: connection
        })
    }

    static associate(models) {
        this.hasOne(model.useraddress, {
            foreignKey: "address_id",
            as: "user_address"
        }),
        this.hasMany(model.pet, {
            foreignKey: "pet_id",
            as: "user_pet"
        })
    }
}

module.exports = users;