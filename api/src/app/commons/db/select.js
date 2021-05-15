const connection = require('./db')

module.exports = (tableName, where) => {
  const query = connection.table(tableName).select()
  if (where) {
    query.where(where)
  }
  return query
}
