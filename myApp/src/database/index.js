const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const connection = new Sequelize(dbConfig);

const User = require('../../models/Users');
const UsersAddresses = require('../../models/UsersAddresses')


User.init(connection);
UsersAddresses.init(connection);

User.associate(connection.models)
UsersAddresses.associate(connection.models)


module.exports = connection;
