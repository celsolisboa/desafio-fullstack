'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfessoresSchema extends Schema {
  up () {
    this.create('professores', (table) => {
      table.increments()
      table.increments('professor_id').primary()
      table.string('nome_professor',200)
      table.timestamps()
    })
  }

  down () {
    this.drop('professores')
  }
}

module.exports = ProfessoresSchema
