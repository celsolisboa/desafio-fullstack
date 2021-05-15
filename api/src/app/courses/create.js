const db = require('./../commons/db/')

module.exports = (course) => (db.insert('courses', course))
