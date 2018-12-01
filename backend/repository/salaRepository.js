var Sala = require("../entity/sala");

exports.listar = (ok, erro) => {
    var listaSalas = [];

    try {
        let strQuery = "select id, descricao from sala";

        db.query(strQuery, (err, result) => {
            if (err) { erro(err); }
            
            result.forEach(p => {
                var sala = new Sala();
                sala.id = p.id;
                sala.descricao = p.descricao;

                listaSalas.push(sala);
            })

            ok(listaSalas);
        });
    } catch (error) {
        erro(error);
    }
};

exports.obterPorId = (ok, erro, id) => {
    try {
        let strQuery = "select id, descricao from sala where id = " + id;

        db.query(strQuery, (err, result) => {
            if (err) { erro(err); }
            if (result.length <= 0) { ok({})}
            
            var sala = new Sala();
            sala.id = result[0].id;
            sala.descricao = result[0].descricao;

            ok(sala);
        });
    } catch (error) {
        erro(error);
    }
};