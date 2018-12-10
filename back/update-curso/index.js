let db = require('./models/index');

module.exports.update = (event, context, callback) => {

    context.callbackWaitsForEmptyEventLoop = false;
    db.sequelize.transaction(transaction => {

        return db.sequelize.models.Cursos.findByPk(event.params.path.id, {
            include: [
                { model: db.sequelize.models.Salas, as: "Salas" },
                { model: db.sequelize.models.Professores, as: "Professores" },
            ]
        })
            .then(data => {
                if (!data) {
                    return Promise.reject({
                        errorMessage: "BadRequest: Curso nao encontrado!",
                        statusCode: 400,
                        typeError: "BadRequest"
                    })
                }
                return data.update(event.body, transaction).then(curso => {
                    let promises = []
                    promises.concat(curso.Salas.map(sala => sala.CURSOS_SALAS.destroy(sala.CURSOS_SALAS, { transaction })))
                    promises.concat(curso.Professores.map(prof => prof.CURSOS_PROFESSORES.destroy(prof.CURSOS_PROFESSORES, { transaction })))
                    return Promise.all(promises).then(_ => Promise.resolve(data))
                }).then(curso => Promise.all([
                    curso.setSalas(event.body.idSalas, { transaction }),
                    curso.setProfessores(event.body.idProfessores, { transaction })
                ]).then(_ => Promise.resolve(curso)))
            })
            .then(curso => callback(null, curso))
            .catch(erro => callback(JSON.stringify(erro) == {} ? erro : JSON.stringify(erro), null))
    })
}
