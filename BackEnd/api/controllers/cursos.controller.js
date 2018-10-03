function Cursos(){


this.loging = function (req, res, next) {
        console.log('funciona?');
        res.send({msg: req.params.destino})
    }
    
}

this.list = function (req,  res , next ) {

}




module.exports = new Cursos