const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const client = require("./js/_database");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

client.connect();

app.listen(8080, ()=> {
    console.log("api rodando na porta 8080")
});

// INICIO ROTAS GET
app.get('/cursos', (req, res)=>{
    client.query(`Select * from curso`, (err, result)=>{
        if(!err){
            res.send(result.rows);
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

// FIM ROTAS GET

// INICIO ROTAS POST
app.post('/curso/novo-curso', (req, res)=>{
    const user = req.body;
    let insertQuery =  ` insert into curso(id_curso, nome, inicio, fim)
                      values(${user.id_curso}, '${user.nome}' , '${user.inicio}' , '${user.fim}')`

   client.query(insertQuery, (err, result) => {
        if ( ! err){
           res.send( 'Inserção com sucesso' )
       }
       else { console.log(err.message) }
   })
   client.end;
})
// FIM ROTAS POST

// INICIO ROTAS DELETE
app.delete('/curso/:id', (req, res)=> {
    var id = req.params.id
    let insertQuery = `delete from curso where id_curso=${id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})
// FIM ROTAS DELETE








