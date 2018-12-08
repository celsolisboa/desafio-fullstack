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
} from '../controllers/curso.controller';

const routes = (app) => {
    app.route('/professores')
        .get(getProfessores)
        .post(addProfessor);

    app.route('/salas')
        .get(getSalas)
        .post(addSala);

    app.route('/cursos')
        .get(getCursos)
        .post(addCurso);

    app.route('/cursos/:cursoId')
        .put(updateCurso);
};

export default routes;
