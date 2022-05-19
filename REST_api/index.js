const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const client = require("./js/_database");
const cors = require('cors');
const { response } = require('express');

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

client.connect();

app.listen(8080, ()=> {
    console.log("api rodando na porta 8080")
});

// INICIO ROTAS GET
app.get('/curso', (req, res)=>{
    client.query(`Select * from novo_curso`, (err, result)=>{
        if(!err){
            res.send({
                message: 'Todos os cursos',
                data:result.rows
            });
        }
    });
    client.end;
})

app.get('/curso/:id', (req, res)=>{
    var id = req.params.id
    var logQuery = `Select * from novo_curso 
                        where id_novo_curso = ${id};`
    client.query(logQuery, (err, result)=>{
        if(!err){
            res.send({
                message: 'Todos os cursos',
                data: result.rows
            });
        }
    });
    client.end;
})

app.get('/sala/:id', (req, res)=>{
    var id = req.params.id
    var logQuery = `Select * from sala 
                        where id_sala = ${id};`
    client.query(logQuery, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/professor', (req, res)=>{
    client.query(`Select * from professor`, (err, result)=>{
        if(!err){
            res.send({
                message: 'Todos os professores',
                data:result.rows
            });
        }
    });
    client.end;
})

app.get('/sala', (req, res)=>{
    client.query(`Select * from sala`, (err, result)=>{
        if(!err){
            res.send({
                message: 'Todas as salas',
                data:result.rows
            });
        }
    });
    client.end;
})
// FIM ROTAS GET

// INICIO ROTAS POST
app.post('/curso/novo-curso', (req, res)=>{
    const name = req.body.nome;
    const inicio = req.body.inicio;
    const fim = req.body.fim;
    const professor = req.body.professor;
    const sala = req.body.sala;
    let insertQuery =  ` insert into novo_curso(nome, inicio, fim, professor, sala)
                      values('${name}' , '${inicio}' , '${fim}', '${professor}', '${sala}' )`

   client.query(insertQuery, (err, result) => {
        if ( ! err){
           res.send({
            message: 'Curso cadastrado com sucesso!',
        })
       }
       else { console.log(err.message) }
   })
   client.end;
})

app.post('/login', async (req, res, result)=> {

    const email = req.body.email;
    const senha = req.body.senha;


    const data = await client.query(`SELECT email, senha 
                                    FROM public.usuario 
                                    WHERE email='${email}' and senha='${senha}'`)
    if(data.rows == ''){
        return res.status(401).send('Email ou senha inválidos')
    } else {
        return res.status(200).send(response)
    }
    
});

// FIM ROTAS POST

//INICIO ROTAS PUT
app.put('/curso/:id', (req, res)=> {
    var data = '';
    const gId = req.params
    console.log(req.body)
    data = req.body.nome
    const body = req.body.nome
    console.log(data)
    client.query(`UPDATE novo_curso SET nome = '${body.nome}', 
                       sala = '${body.sala}',
                       inicio = '${body.inicio}',
                       fim = '${body.fim}',
                       professor = '${body.professor}'
                       where id_novo_curso = ${gId}`, (err, result)=>{
        if(!err){
            res.send({
                message: 'Curso atualizado com sucesso!',
                data: result.rows
            })
        }
        else{ console.log(err.message) }
    })
});

//FIM ROTAS PUT

// INICIO ROTAS DELETE
app.delete('/curso/:id', (req, res)=> {
    var id = req.params.id
    let insertQuery = `delete from novo_curso where id_novo_curso=${id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send({
                message: 'Curso removido com sucesso!',
            })
        }
        else{ console.log(err.message) }
    })
    client.end;
})
// FIM ROTAS DELETE








