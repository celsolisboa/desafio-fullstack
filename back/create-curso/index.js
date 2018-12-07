let db = require('./models/index');

module.exports.create = (event, context, callback) => {

    context.callbackWaitsForEmptyEventLoop = false;

    console.log(context)
    console.log(event)

    db.sequelize.models.Cursos.create(event)
        .then(data => {
            data.setProfessores(event.idProfessores)
            data.setSalas(event.idSalas)
            callback(null, data)
        })
        .catch(erro => callback(erro, null))
};