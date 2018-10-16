const database = require("mssql/msnodesqlv8")

const port = 3000

const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path")

const dbConfig = {
    driver: 'msnodesqlv8',
    user: 'gabriel',
    password: '$smvg0000',
    server: 'db-server-mssql.database.windows.net',
    database: 'db-celsolisboa-app',
}

const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const router = express.Router()

router.get("/", (req, res) => {
    res.send("Sucesso")
});

router.get("/api/cursos/listar", (req, res) => {
    new database.ConnectionPool(dbConfig).connect()
        .then(pool => {
            return pool.query('select * from teste')
        })
        .then(result => {
            res.json(result.recordsets[0])
            res.end()
        })
        .catch(error => console.log(error))
})

router.get("/api/professores/listar", (req, res) => {
    new database.ConnectionPool(dbConfig).connect()
        .then(pool => {
            return pool.query('select * from professor')
        })
        .then(result => {
            res.json(result.recordsets[0])
            res.end()
        })
        .catch(error => console.log(error))
})

router.get("/api/salas/listar", (req, res) => {
    new database.ConnectionPool(dbConfig).connect()
        .then(pool => {
            return pool.query('select * from sala')
        })
        .then(result => {
            res.json(result.recordsets[0])
            res.end()
        })
        .catch(error => console.log(error))
})

router.post("/api/cursos/cadastrar", (req, res) => {

    new database.ConnectionPool(dbConfig).connect()
        .then(pool => {
            const queryString = `insert into 
            teste(nome, professor, sala, inicio, fim) 
            VALUES ( '${req.body.courseName}', '${req.body.teachers}', '${req.body.rooms}', '${req.body.startDate}', '${req.body.endDate}')`
            return pool.query(queryString)
        })
        .then(result => {
            res.json(result.recordsets[0])
            res.end()
        })
        .catch(error => console.log(error))
})

router.delete("/api/cursos/deletar/:id", (req, res) => {
    new database.ConnectionPool(dbConfig).connect()
        .then(pool => {
            return pool.query `delete teste where ID=${parseInt(req.params.id)}`
        })
        .then(() => console.log("Deletado com sucesso!") && res.end())
        .catch(error => console.log(error))

});

app.use('/', router)
app.use('/api/cursos/listar', router)
app.use('/api/professores/listar', router)
app.use('/api/salas/listar', router)
app.use('/api/cursos/cadastrar', router)
app.use('/api/cursos/deletar/:id', router)

app.listen(port, () => console.log("Servidor rodando"))