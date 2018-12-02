module.exports = (app) => {
    var cursosController = require('../controllers/cursoController');
    
    app.route('/cursos')
        .get(cursosController.listarCursos)
        .post(cursosController.incluirCurso)
        .put(cursosController.alterarCurso);

    app.route('/cursos/:id')
        .get(cursosController.obterCursoPorId)
        .delete(cursosController.excluirCurso);
}