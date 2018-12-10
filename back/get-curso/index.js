let db = require('./models/index');

module.exports.get = (event, context, callback) => {

    context.callbackWaitsForEmptyEventLoop = false;

    db.sequelize.models.Cursos.findByPk(event.params.path.id,{
        include: [
            {model: db.sequelize.models.Salas, as: "Salas", required:false },
            {model: db.sequelize.models.Professores, as: "Professores",required:false }
        ]
    }).then(data => callback(null, data.dataValues))
    .catch(erro => callback(JSON.stringify(erro) == {} ? erro : JSON.stringify(erro), null))
}