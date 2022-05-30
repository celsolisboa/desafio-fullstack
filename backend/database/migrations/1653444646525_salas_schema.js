'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalasSchema extends Schema {
  up () {
    this.create('salas', (table) => {
      table.increments()
      table.increments('sala_id').primary()
      table.string('numero_sala',40)
      table.timestamps()
    })
  }

  down () {
    this.drop('salas')
  }
}

module.exports = SalasSchema
