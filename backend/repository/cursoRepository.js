var Curso = require("../entity/curso");

exports.incluir = (curso, erro) => {

    try {
        db.beginTransaction((err) => {
            let strQuery = "insert into curso (nome, hr_inicio, hr_fim) values ('" + curso.nome +"', '" + curso.hr_inicio +"', '" + curso.hr_fim +"')";

            db.query(strQuery, (err, result) => {
                rollbackIfError(err);

                curso.id = result.insertId;

                curso.professores.forEach(p => {
                    let strQueryProfessor = "insert into curso_professor (curso_id, professor_id) values (" + curso.id + ", " + p.id + ")";

                    db.query(strQueryProfessor, (err, result) => {
                        rollbackIfError(err);
                    });
                });

                curso.salas.forEach(s => {
                    let strQuerySala = "insert into curso_sala (curso_id, sala_id) values (" + curso.id + ", " + s.id + ")";

                    db.query(strQuerySala, (err, result) => {
                        rollbackIfError(err);
                    });
                });

                db.commit((err) => {
                    rollbackIfError(err);
                    console.log('Dado inserido com sucesso! id: ' + result.insertId);
                });
            });
        });
    } catch (error) {
        erro(error);
        rollbackIfError(error);
    }
};

exports.alterar = (curso, erro) => {

        db.beginTransaction((err) => {
            let strQuery = "update curso set nome = '" + curso.nome +"', hr_inicio = '" + curso.hr_inicio +"', hr_fim = '" + curso.hr_fim +"' where id = " + curso.id;

            db.query(strQuery, async (err, result) => {
                rollbackIfError(err);

                ExcluirProfessoresDesmarcados(curso);

                IncluirNovosProfessoresSelecionados(curso);


                ExcluirSalasDesmarcadas(curso);

                IncluirNovasSalasSelecionadas(curso);

                await sleep(500);

                db.commit((err) => {
                    rollbackIfError(err);
                    console.log('Dado alterado com sucesso!');
                });
            });
        })
        .on('error', (err) => {
            console.log('Erro tratado: ', err);
        });
};

exports.excluir = (id, erro) => {
    db.beginTransaction((err => {
        //Excluir relação de professores
        let strQuery = "delete from curso_professor where curso_id = " + id;

        db.query(strQuery, (err, result) => {
            rollbackIfError(err);

            //Excluir relação de salas
            strQuery = "delete from curso_sala where curso_id = " + id;

            db.query(strQuery, (err, result) => {
                rollbackIfError(err);

                //Excluir curso
                strQuery = "delete from curso where id = " + id;

                db.query(strQuery, (err, result) => {
                    rollbackIfError(err);

                    db.commit((err) => {
                        rollbackIfError(err);
                        console.log('Dado alterado com sucesso!');
                    })
                })
            });
        });
    }))
    .on('error', (err) => {
        console.log('Erro tratado: ', err);
    });
};

exports.listar = (ok, erro) => {
    var listaCursos = [];
    
    try {
        let strListar = "select id, nome, hr_inicio, hr_fim from curso";

        db.query(strListar, async (err, result) => {
            if (err) { erro(err); }

            result.forEach(c => {
                var curso = new Curso();
                curso.id = c.id;
                curso.nome = c.nome;
                curso.hr_inicio = c.hr_inicio;
                curso.hr_fim = c.hr_fim;
                
                curso.professores = obterProfessores(curso);
                curso.salas = obterSalas(curso);

                listaCursos.push(curso); 
            })

            await sleep(500);

            ok(listaCursos);
        });
    } catch (error) {
        erro(error);
    }
};

exports.obterPorId = (ok, erro, id) => {
    try {
        let strObter = "select id, nome, hr_inicio, hr_fim from curso where id = " + id;

        db.query(strObter, async (err, result) => {
            if (err) { erro(err); }
            if (result.length <= 0) { ok({})}

            var curso = new Curso();
            curso.id = result[0].id;
            curso.nome = result[0].nome;
            curso.hr_inicio = result[0].hr_inicio;
            curso.hr_fim = result[0].hr_fim;

            curso.professores = await obterProfessores(curso);
            curso.salas = obterSalas(curso);

            await sleep(500);
            
            ok(curso);
        });
    } catch (error) {
        erro(error);
    }
};

function sleep(ms) {
    //Recurso técnico alternativo (gambiarra) até entender melhor as promisses
    return new Promise(resolve => setTimeout(resolve, ms));
}


function obterProfessores(curso) {
    //Obter relação curso x professores
    let strCurProf = "select professor_id from curso_professor where curso_id = " + curso.id;

    var Professor = require("../entity/professor");

    var lista = [];

    db.query(strCurProf, (err, result) => {
        if (err) { erro(err); }

        result.forEach(p => {
            var professor = new Professor();
            professor.id = p.professor_id;
            
            lista.push(professor);
        });
    });

    return lista;
}

function obterSalas(curso) {
    //Obter relação curso x salas
    let strCurSala = "select sala_id from curso_sala where curso_id = " + curso.id;

    var Sala = require("../entity/sala");

    var lista = [];

    db.query(strCurSala, (err, result) => {
        if (err) { erro(err); }

        result.forEach(s => {
            var sala = new Sala();
            sala.id = s.sala_id;

            lista.push(sala);
            //curso.salas.push(sala);
        });
    });

    return lista;
}




function IncluirNovasSalasSelecionadas(curso) {
    curso.salas.forEach(s => {
        let str = "select count(1) as quantidade from curso_sala where curso_id = " + curso.id + " and sala_id = " + s.id;
        db.query(str, (err, result) => {
            rollbackIfError(err);
            
            if (result.length <= 0) {
                let strQuerySala = "insert into curso_sala (curso_id, sala_id) values (" + curso.id + ", " + s.id + ")";
                db.query(strQuerySala, (err, result) => {

                    rollbackIfError(err);
                });
            }
        });
    });
}

function ExcluirSalasDesmarcadas(curso) {
    var idsSalasManter = "";
    if (curso.salas.length > 0) {
        
        curso.salas.forEach(p => {
            idsSalasManter += (idsSalasManter != "" ? "," : "") + p.id;
        });
        var strDeleteSalasRemov = "delete from curso_sala where curso_id = " + curso.id + " and sala_id not in (" + idsSalasManter + ")";
        db.query(strDeleteSalasRemov, (err, result) => {
            rollbackIfError(err);
        });
    }
}

function IncluirNovosProfessoresSelecionados(curso) {
    curso.professores.forEach(p => {
        let str = "select count(1) as quantidade from curso_professor where curso_id = " + curso.id + " and professor_id = " + p.id;
        db.query(str, (err, result) => {
            rollbackIfError(err);
            if (result.length <= 0) {
                let strQueryProfessor = "insert into curso_professor (curso_id, professor_id) values (" + curso.id + ", " + p.id + ")";
                db.query(strQueryProfessor, (err, result) => {
                    rollbackIfError(err);
                });
            }
        });
    });
}

function ExcluirProfessoresDesmarcados(curso) {
    var idsProfManter = "";
    if (curso.professores.length > 0) {
        curso.professores.forEach(p => {
            idsProfManter += (idsProfManter != "" ? "," : "") + p.id;
        });
        var strDeleteProfRemov = "delete from curso_professor where curso_id = " + curso.id + " and professor_id not in (" + idsProfManter + ")";
        db.query(strDeleteProfRemov, (err, result) => {
            rollbackIfError(err);
        });
    }
}

function rollbackIfError(err) {
    if (err) {
        console.log('Rollback', err);
        db.rollback((err) => {
            
            throw err;
        })
    }
}