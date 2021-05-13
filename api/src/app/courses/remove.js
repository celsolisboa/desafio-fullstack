const db = require('./../commons/db/')

module.exports = (id) => db.alter('courses', { id, data: { disabled: true } })
