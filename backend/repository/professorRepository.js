var Professor = require("../entity/professor");

exports.listar = (ok, erro) => {
    var listaProfessores = [];

    try {
        let strQuery = "select id, nome from professor";

        db.query(strQuery, (err, result) => {
            if (err) { erro(err); }
            
            result.forEach(p => {
                var professor = new Professor();
                professor.id = p.id;
                professor.nome = p.nome;

                listaProfessores.push(professor);
            })

            ok(listaProfessores);
        });
    } catch (error) {
        erro(error);
    }
};

exports.obterPorId = (ok, erro, id) => {
    try {
        let strQuery = "select id, nome from professor where id = " + id;

        db.query(strQuery, (err, result) => {
            if (err) { erro(err); }
            
            var professor = new Professor();
            professor.id = result[0].id;
            professor.nome = result[0].nome;

            ok(professor);
        });
    } catch (error) {
        erro(error);
    }
};