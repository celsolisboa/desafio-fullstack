const connection = require('./db')

module.exports = (tableName, { id, data }) => connection.table(tableName).update(data).where({ id }).returning('*')
