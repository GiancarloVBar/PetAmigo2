const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const connection = new Sequelize(dbConfig);

const User = require('../../models/Users');
const UsersAddresses = require('../../models/UsersAddresses')
const Pets = require('../../models/Pets')
const Ongs = require('../../models/Ongs')
const OngsAddresses = require('../../models/OngsAddresses')

Ongs.init(connection)
Pets.init(connection)
User.init(connection);
OngsAddresses.init(connection)
UsersAddresses.init(connection);
Ongs.init(connection);
OngsAddresses.init(connection);
Pets.init(connection);

User.associate(connection.models)
UsersAddresses.associate(connection.models)
Ongs.associate(connection.models)
OngsAddresses.associate(connection.models)
Pets.associate(connection.models)


module.exports = connection;
