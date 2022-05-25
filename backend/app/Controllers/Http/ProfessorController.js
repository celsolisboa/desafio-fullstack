'use strict'
const Database = use('Database')
class ProfessorController {
    async index () {
        const professor = await Database.select(['id','nome_professor']).from('professores')
         return professor
       }

}

module.exports = ProfessorController
