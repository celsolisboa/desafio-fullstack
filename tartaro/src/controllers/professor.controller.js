import Professor from '../models/professor.model';

export const getProfessores = async (req, res) => {
    Professor.find({}, '_id, nome', (err, professores) => {
        if (err) {
            res.send(err);
        }
        res.json(professores);
    }).sort({ nome: 1 });
};

export const addProfessor = async (req, res) => {
    const newProfessor = new Professor(req.body);

    newProfessor.save((err, professor) => {
        if (err) {
            res.statusCode = 412;
            res.send(err);
        }
        res.statusCode = 201;
        res.json(professor);
    });
};
