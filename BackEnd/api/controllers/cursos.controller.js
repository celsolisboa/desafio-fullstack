
var fs = require('fs');
path = require('path');
cursoJsonPath = path.join(__dirname, 'cursos.json');
/* cursoJsonPath = './cursoJsonPath.json' */
file = require(cursoJsonPath);
let Arr_curso = []
const Arr_professor = [];

function Cursos() {
    this.criarCurso = ((req, res, next) => {
        const add = {
            "id": Number(req.params.id),
            "sala": req.params.sala,
            "professor": req.params.professor,
            "materia": req.materia,
            "horaInicial": req.params.horaInicial,
            "horaFinal": req.params.horaFinal
        }
        /*      let rawdata = fs.readFileSync(cursoJsonPath);
             const arr_cursoteste = JSON.parse(rawdata); */
        Arr_curso.push(add)
        fs.writeFile(cursoJsonPath, JSON.stringify(Arr_curso, null, 2), ((err) => {
            if (err) {
                res.send(err);
            } else {
                console.log('writing aasasto ' + cursoJsonPath);
                res.send('item adicionado?')
            }
        }))
    })


    this.listarCurso = ((req, res, next) => {
        console.log('Oi');
        let rawdata = fs.readFileSync(path.join(__dirname, 'cursos.json'));
        Arr_curso = JSON.parse(rawdata);
        res.send(Arr_curso)
    })

    this.atualizarCurso = ((req, res, next) => {
        let rawdata = fs.readFileSync(cursoJsonPath);
        const arr_cursoteste = JSON.parse(rawdata);
        console.log('Entrei em atualizar curso');
        for (let i = 0; i < arr_cursoteste.length; i++) {
            const element = arr_cursoteste[i];
            if (element.id === Number(req.params.id)) {
                element.id = Number(req.params.id);
                element.sala = Number(req.params.sala);
                element.professor = req.params.professor;
                element.materia = req.params.materia;
                element.horaInicial = req.params.horaInicial;
                element.horaFinal = req.params.horaFinal;
                fs.writeFile(cursoJsonPath, JSON.stringify(arr_cursoteste, null, 2), ((err) => {
                    if (err) {
                        res.send(err);
                    } else {
                        console.log('writing aasasto ' + cursoJsonPath);
                        /* res.send('item adicionado?') */
                        const resultado = {
                            result: 'Item editado com Sucesso',
                            item: element
                        }
                        res.send(resultado)
                    }
                }));
            }
        }
    })

    this.deletarCurso = ((req, res, next) => {

    })

    this.grafico = ((req, res, next) => {
        let rawdata = fs.readFileSync(path.join(__dirname, 'grafico.json'));
        const grafico = JSON.parse(rawdata);;
        res.send(grafico)

    })
    this.getProfessor = ((req, res, next) => {
        for (let i = 0; i < Arr_curso.length; i++) {
            const element = Arr_curso[i];
            if (Arr_professor.indexOf(element.professor) <= -1) {
                Arr_professor.push(element.professor);
            } else {
                console.log('N adiciona');
            }
        }
        res.send(Arr_professor)
    })
}
module.exports = new Cursos()