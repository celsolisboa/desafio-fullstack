'use strict'
const Database = use('Database')

class SalaController {
    async index () {
        const salas = await Database.select(['id','numero_sala']).from('salas')
         return salas
       }
}

module.exports = SalaController
