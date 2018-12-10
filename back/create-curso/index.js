let db = require('./models/index');

module.exports.create = (event, context, callback) => {

    context.callbackWaitsForEmptyEventLoop = false;

    const response = {}
    response.headers = {}

    return db.sequelize.transaction(transaction => {
        return db.sequelize.models.Cursos.create(event, transaction)
            .then(data => {
                return Promise.all([
                    data.setProfessores(event.idProfessores, { transaction }),
                    data.setSalas(event.idSalas, { transaction })
                ]).then(_ => Promise.resolve(data))
            })
    })
        .then(data => {
            response.body = JSON.stringify(data.dataValues)
            response.statusCode = 200
            callback(null, response)
        })
        .catch(erro => callback(JSON.stringify(erro) == {} ? erro : JSON.stringify(erro), null))
}