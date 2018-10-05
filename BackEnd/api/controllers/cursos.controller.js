
var fs = require('fs')
path = require('path')

function Cursos() {
 
    this.criarCurso = ((req, res, next) => {

    })

    this.listarCurso = ((req, res, next) => {
        console.log('Oi');
        let rawdata = fs.readFileSync(path.join(__dirname, 'mockUpData.json'));
        let student = JSON.parse(rawdata);
        console.log(student);
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

}
module.exports = new Cursos()