module.exports = (app) => {
    var professoresController = require('../controllers/professorController');
    
    app.route('/professores')
        .get(professoresController.listarProfessores)

    app.route('/professores/:id')
        .get(professoresController.obterProfessorPorId);
}