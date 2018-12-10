let db = require('./models/index');

module.exports.list = (event, context, callback) => {

    context.callbackWaitsForEmptyEventLoop = false;

    db.sequelize.models.Cursos.findAll({
        include: [
            {model: db.sequelize.models.Salas, as: "Salas", required:false },
            {model: db.sequelize.models.Professores, as: "Professores",required:false }
        ]
    }).then(data => callback(null, data.map(x => x.dataValues)))
    .catch(erro => callback(erro, null))
};