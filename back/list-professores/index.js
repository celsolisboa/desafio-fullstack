let db = require('./models/index');

module.exports.list = (event, context, callback) => {

    context.callbackWaitsForEmptyEventLoop = false;
    debugger
    db.sequelize.models.Professores.findAll({})
    .then(data => callback(null, data.map(x => x.dataValues)))
    .catch(erro => callback(erro, null))
};

