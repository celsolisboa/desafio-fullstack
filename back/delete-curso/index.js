let db = require('./models/index');

module.exports.destroy = (event, context, callback) => {

    context.callbackWaitsForEmptyEventLoop = false;
    db.sequelize.transaction(transaction => {
        return db.sequelize.models.Cursos.findByPk(event.params.path.id, {
            include: [
                { model: db.sequelize.models.Salas, as: "Salas" },
                { model: db.sequelize.models.Professores, as: "Professores" },
            ]
        }).then(curso => {
            debugger
            if (!curso) {
                return Promise.reject({
                    errorMessage: "BadRequest: Curso nao encontrado!",
                    statusCode: 400,
                    typeError: "BadRequest"
                })
            }
            curso.Salas.map(sala => sala.CURSOS_SALAS.destroy(sala.CURSOS_SALAS, { transaction }))
            curso.Professores.map(prof => prof.CURSOS_PROFESSORES.destroy(prof.CURSOS_PROFESSORES, { transaction }))
            return Promise.resolve(curso)
        }).then(curso => {
            return curso.destroy(curso, transaction)
        })
    }).catch(erro => {
        callback(JSON.stringify(erro) == {} ? erro : JSON.stringify(erro), null)
    })
}


this.destroy({
    "params": {
        "path": {
            "id": 54
        }
    }
}, {}, (err, data) => {
    console.log(err, data)
})