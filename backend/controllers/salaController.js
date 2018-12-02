var Sala = require("../entity/sala");
var repository = require("../repository/salaRepository");

exports.listarSalas = (req, res) => {
    repository.listar(
        (listaSalas) => {
            res.status(200).json(listaSalas);
        },
        (erro) => {
            if (erro) {
                res.status(500).json("Algo saiu errado!")
                throw erro;
            }
        }
    )
};

exports.obterSalaPorId = (req, res) => {
    var id = req.params.id;
    console.log("id = " + id);

    repository.obterPorId(
        (sala) => {
            res.status(200).json(sala);
        },
        (error) => {
            if (error) {
                res.status(500).json("Algo saiu errado!")
                throw error;
            }
        },
        id);
};
