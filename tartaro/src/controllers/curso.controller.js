import Curso from '../models/curso.model';

export const getCursos = async (req, res) => {
    Curso.find({}, '', (err, cursos) => {
        if (err) {
            res.send(err);
        }
        res.json(cursos);
    }).populate(['professores', 'salas']).sort({ nome: 1 });
};

export const addCurso = async (req, res) => {
    const newCurso = new Curso(req.body);

    newCurso.save((err, curso) => {
        if (err) {
            res.statusCode = 412;
            res.send(err);
        }

        res.statusCode = 201;
        res.json(curso);
    });
};

export const getCursoById = async (req, res) => {
    Curso.findById(req.params.cursoId, (err, curso) => {
        if (err) {
            res.statusCode = 404;
            res.send(err);
        }
        res.json(curso);
    }).populate(['professores', 'salas']);
};

export const updateCurso = async (req, res) => {
    Curso.findOneAndUpdate(
        { _id: req.params.cursoId },
        req.body,
        { new: true },
        (err, curso) => {
            if (err) {
                res.send(err);
            }
            res.json(curso);
        // eslint-disable-next-line comma-dangle
        }
    ).populate(['professores', 'salas']);
};

export const deleteCurso = async (req, res) => {
    Curso.remove({ _id: req.params.cursoId }, (err) => {
        if (err) {
            res.send(err);
        }
        res.json({
            message: 'Curso excluido com sucesso',
        });
    });
};
