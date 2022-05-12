const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const connection = new Sequelize(dbConfig);

const User = require('../../models/Users');
const Pets = require('../../models/Pets')
const Ongs = require('../../models/Ongs')

Pets.init(connection)
User.init(connection);
Ongs.init(connection);
Pets.init(connection);

// Ongs.associate(connection.models)
// Pets.associate(connection.models)


module.exports = connection;
