const db = require('./../commons/db/')

module.exports = (id) => (id ? db.select('courses', { disabled: false, id }) : db.select('courses', { disabled: false }))
