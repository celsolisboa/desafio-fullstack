const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const client = require("./js/_database");
const cors = require('cors')

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
    var logQuery = `Select * from curso 
                        where id_curso = ${id};`
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

app.post('/login', async (req, res)=> {

    const email = req.body.email;
    const senha = req.body.senha;

    const data = await client.query(`SELECT email, senha 
                                    FROM public.usuario 
                                    WHERE email='${email}' and senha='${senha}'`)
    if(data.rows == ''){
        res.send('Email ou senha inválidos')
    } else {
        res.send('Logado com sucesso')
    }
    
});

// FIM ROTAS POST

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








