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
        }
    ).populate(['professores', 'salas'])
};
