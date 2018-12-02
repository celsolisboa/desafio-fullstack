var Curso = require("../entity/curso");
var repository = require("../repository/cursoRepository");

exports.incluirCurso = (req, res) => {
    var curso = new Curso();
    extrairObjeto(req, curso);

    repository.incluir(curso, (erro) => {
        if (erro) {
            res.status(500).json("Algo saiu errado!")
            throw erro;
        }
    });

    res.status(200).json("Dados inseridos!")
};

exports.alterarCurso = (req, res) => {
    var curso = new Curso();
    extrairObjeto(req, curso);

    repository.alterar(curso, (erro) => {
        if (erro) {
            res.status(500).json("Algo saiu errado!")
            throw erro;
        }
    });

    res.status(200).json("Dados alterardos!")
};

exports.excluirCurso = (req, res) => {
    var id = req.params.id;

    repository.excluir(id, (erro) => {
        if (erro) {
            res.status(500).json("Algo saiu errado!")
            throw erro;
        }
    });

    res.status(200).json("Curso excluído!")
};

exports.listarCursos = (req, res) => {
    repository.listar(
        (listaCursos) => {
            res.status(200).json(listaCursos);
        },
        (erro) => {
            if (erro) {
                res.status(500).json("Algo saiu errado!")
                throw erro;
            }
        }
    )
};

exports.obterCursoPorId = (req, res) => {
    var id = req.params.id;
    
    repository.obterPorId(
        (curso) => {
            res.status(200).json(curso);
        },
        (error) => {
            if (error) {
                res.status(500).json("Algo saiu errado!")
                throw error;
            }
        },
        id);
};

function extrairObjeto(req, curso)
{
    curso.id = req.body.id;
    curso.nome = req.body.nome;
    curso.hr_inicio = req.body.horaInicio;
    curso.hr_fim = req.body.horaFim;
    curso.professores = req.body.professores;
    curso.salas = req.body.salas;
}