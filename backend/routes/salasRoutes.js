module.exports = (app) => {
    var salasController = require('../controllers/salaController');
    
    app.route('/salas')
        .get(salasController.listarSalas)

    app.route('/salas/:id')
        .get(salasController.obterSalaPorId);
}