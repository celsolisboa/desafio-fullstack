const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Users = require('../models/Users')
const Courses = require('../models/Courses')

const connection = new Sequelize(dbConfig)

Users.init(connection)
Courses.init(connection)

module.exports = connection;