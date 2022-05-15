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
app.get('/users', (req, res)=>{
    client.query(`Select * from usuario`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/users/:id', (req, res)=>{
    var id = req.params.id
    var logQuery = `Select * from usuario 
                        where id_usuario = ${id};`
    client.query(logQuery, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

// FIM ROTAS GET

// INICIO ROTAS POST
app.post('/users', (req, res)=>{
    const user = req.body;
    let insertQuery =  ` insert into usuario(id_usuario, email, senha)
                      values(${user.id_usuario}, '${user.email}' , '${user.senha}')`

   client.query(insertQuery, (err, result) => {
        if ( ! err){
           res.send( 'Inserção com sucesso' )
       }
       else { console.log(err.message) }
   })
   client.end;
})
// FIM ROTAS POST

// INICIO ROTAS PUT
app.put('/users/:id', (req, res)=> {
    var user = req.body;
    var updateQuery = `UPDATE usuario
                       SET email = '${user.email}',
                       senha = '${user.senha}'
                       where id_usuario = ${user.id_usuario};`
    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})
// FIM ROTAS PUT

// INICIO ROTAS DELETE
app.delete('/users/:id', (req, res)=> {
    var id = req.params.id
    let insertQuery = `delete from usuario where id_usuario=${id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})
// FIM ROTAS DELETE








