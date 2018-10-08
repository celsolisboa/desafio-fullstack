
var fs = require('fs')
path = require('path')
let student
const Arr_professor = []
function Cursos() {
 
    this.criarCurso = ((req, res, next) => {

    })

    this.listarCurso = ((req, res, next) => {
        console.log('Oi');
        let rawdata = fs.readFileSync(path.join(__dirname, 'mockUpData.json'));
        student = JSON.parse(rawdata);
        Arr_professor.push(student);
        res.send(student)
    })

    this.atualizarCurso = ((req, res, next) => {

    })

    this.deletarCurso = ((req, res, next) => {

    })

    this.grafico = ((req, res, next) => {
        let rawdata = fs.readFileSync(path.join(__dirname, 'grafico.json'));
        const grafico = JSON.parse(rawdata);;
        res.send(grafico)
        
    })

    this.getProfessor = ((req, res, next) => {

        for (let i = 0; i < student.length; i++) {
            const element = student[i];
            if (Arr_professor.indexOf(element.professor) <= -1) {
              Arr_professor.push(element.professor);
            } else {
              console.log('N adiciona');
            }
            /* console.log('resultado do array de professores', this.Arr_professor); */
      
          }
    })

}
module.exports = new Cursos()