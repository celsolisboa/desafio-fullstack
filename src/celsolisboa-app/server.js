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

router.get("/teste", (req, res) => {
    new database.ConnectionPool(dbConfig).connect()
        .then(pool => {
            return pool.query('select * from teste')
        })
        .then(result => {
            console.log('Resultado: ' + result)
            res.json(result.recordsets[0])
            res.end()
        })
        .catch(error => console.log(error))
})

router.post("/api/cursos/cadastrar", (req, res) => {

    new database.ConnectionPool(dbConfig).connect()
        .then(pool => {
            const queryString = `insert into 
            teste(id, nome, professor, sala, inicio, fim) 
            VALUES (${req.body.id}, '${req.body.courseName}', '${req.body.teachers}', '${req.body.rooms}', '${req.body.startDate}', '${req.body.endDate}')`
            console.log(queryString)
            return pool.query(queryString)
        })
        .then(result => {
            console.log(result.recordsets[0])
            res.json(result.recordsets[0])
            res.end()
        })
        .catch(error => console.log(error))
})

router.delete("/api/cursos/deletar/:id", (req, res) => {
    new database.ConnectionPool(dbConfig).connect()
        .then(pool => {
            console.log("fazendo a query de delete")
            return pool.query `delete teste where ID=${parseInt(req.params.id)}`
        })
        .then(() => console.log("Deletado com sucesso!") && res.end())
        .catch(error => console.log(error))

});

app.use('/', router)
app.use('/teste', router)
app.use('/api/cursos/cadastrar', router)
app.use('/api/cursos/deletar/:id', router)

app.listen(port, () => console.log("Servidor ouvindo"))