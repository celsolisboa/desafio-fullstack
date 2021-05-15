const knex = require('knex')
const { db } = require('./../../../config')
const connection = knex({
  client: 'postgres',
  connection: db
})

module.exports = connection
