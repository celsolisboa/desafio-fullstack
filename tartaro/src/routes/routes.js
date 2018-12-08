import {
    addProfessor,
    getProfessores,
} from '../controllers/professor.controller';

import {
    addSala,
    getSalas,
} from '../controllers/sala.controller';

import {
    addCurso,
    getCursos,
    updateCurso,
    deleteCurso,
} from '../controllers/curso.controller';

const routes = (app) => {
    app.route('/api/professores')
        .get(getProfessores)
        .post(addProfessor);

    app.route('/api/salas')
        .get(getSalas)
        .post(addSala);

    app.route('/api/cursos')
        .get(getCursos)
        .post(addCurso);

    app.route('/api/cursos/:cursoId')
        .put(updateCurso)
        .delete(deleteCurso);
};

export default routes;
