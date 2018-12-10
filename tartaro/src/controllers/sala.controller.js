import Sala from '../models/sala.model';

export const getSalas = async (req, res) => {
    Sala.find({}, '_id, nome', (err, salas) => {
        if (err) {
            res.send(err);
        }
        res.json(salas);
    }).sort({ nome: 1 });
};

export const addSala = async (req, res) => {
    const newSala = new Sala(req.body);

    newSala.save((err, sala) => {
        if (err) {
            res.statusCode = 412;
            res.send(err);
        }

        res.statusCode = 201;
        res.json(sala);
    });
};
