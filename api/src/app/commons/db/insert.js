const connection = require('./db')

module.exports = (tableName, data) => connection.table(tableName).insert(data).returning('*')
