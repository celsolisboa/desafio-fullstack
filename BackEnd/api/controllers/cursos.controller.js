
var fs = require('fs')
path = require('path')

function Cursos() {

    this.list = function (req, res, next) {
        let rawdata = fs.readFileSync(path.join(__dirname, 'mockUpData.json'));
        let student = JSON.parse(rawdata);
        console.log(student);
        res.send(student)
    }
}
module.exports = new Cursos()