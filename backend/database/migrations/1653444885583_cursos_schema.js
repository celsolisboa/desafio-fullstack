'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CursosSchema extends Schema {
  up () {
    this.create('cursos', (table) => {
      table.increments()
      table.string('nome_curso',50)
      table.string('inicio',6)
      table.string('fim',6)
      table.integer('sala_id').unsigned().references('sala_id').inTable('salas').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('professor_id').unsigned().references('professor_id').inTable('professores').onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('cursos')
  }
}

module.exports = CursosSchema
