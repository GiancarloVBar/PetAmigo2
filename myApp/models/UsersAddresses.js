const { Model, DataTypes } = require('sequelize');

class useraddress extends Model {
    static init(connection) {
        super.init({
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

    static associate(models) {
        this.belongsTo(models.users,{
            foreignKey: "user_id",
            as: "user"
        })
    }
}

module.exports = useraddress;