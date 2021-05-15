const db = require('./../commons/db/')

module.exports = (id, course) => (db.alter('courses', { id, data: course }))
