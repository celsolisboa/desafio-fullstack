let db = require('./models/index');

module.exports.create = (event, context, callback) => {

    context.callbackWaitsForEmptyEventLoop = false;

    db.sequelize.models.Cursos.create(context)
        .then(data => {
            data.setProfessores(context.idProfessores)
            data.setSalas(context.idSalas)
            callback(null, data)
        })
        .catch(erro => callback(erro, null))
};

this.create({}, {
    nome: "Curso teste lambda 1",
    idProfessores: [1, 2],
    idSalas: [1],
    horaInicio: "14:00",
    horaFim: "16:00"
}, (erro, data) => {
    console.log(data)
})