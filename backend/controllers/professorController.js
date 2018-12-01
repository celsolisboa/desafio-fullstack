var Professor = require("../entity/professor");
var repository = require("../repository/professorRepository");

exports.listarProfessores = (req, res) => {
    repository.listar(
        (listaProfessores) => {
            res.status(200).json(listaProfessores);
        },
        (erro) => {
            if (erro) {
                res.status(500).json("Algo saiu errado!")
                throw erro;
            }
        }
    )
};

exports.obterProfessorPorId = (req, res) => {
    var id = req.params.id;
    console.log("id = " + id);

    repository.obterPorId(
        (professor) => {
            res.status(200).json(professor);
        },
        (error) => {
            if (error) {
                res.status(500).json("Algo saiu errado!")
                throw error;
            }
        },
        id);
};
