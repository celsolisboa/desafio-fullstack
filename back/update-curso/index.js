let db = require('./models/index');

module.exports.create = (event, context, callback) => {

    context.callbackWaitsForEmptyEventLoop = false;
    sequelize.transaction(transaction => {

        db.sequelize.models.Cursos.update(event)
            .then(data => {
                data.setProfessores(event.idProfessores)
                data.setSalas(event.idSalas)
                callback(null, data)
            })
            .catch(erro => callback(erro, null))
    })
}