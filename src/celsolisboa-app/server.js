const database = require("mssql/msnodesqlv8");
const config = {
    driver: 'msnodesqlv8',
    user: 'gabriel',
    password: '$smvg0000',
    server: 'db-server-mssql.database.windows.net',
    database: 'db-celsolisboa-app',
};
const port = 3000;

const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const router = express.Router();

router.get("/", (req, res) => {
    database.connect(config)
        .then(() => res.status(200).send("Sucesso"))
        .catch((error) => console.log(error) )
});

router.get("/teste", (req, res) => {
    database.connect(config)
        .then(conn => {
            const request = new database.Request()
            request.query('select * from teste2', (error, recordSet) => {
                res.json(recordSet.recordsets[0])
                database.close();
            });
        }
        )
        .catch(() => console.log("erro"));

});

router.delete("/user/delete/:id", (req, res) => {
    database.connect(config)
        .then(conn => {
            const request = new database.Request();
            request.query('delete teste2 where ID=' + parseInt(req.params.id), (error, recordSet) => {
                res.send("usuário deletado com sucesso")
                database.close()
            });
        }
        )
        .catch(() => console.log("erro"));

});

router.post("/user/create", (req, res) => {
    database.connect(config)
        .then(conn => {
            const request = new database.Request();
            request.query(`insert into teste2(ID, Nome) VALUES (${req.body.id}, '${req.body.nome}')`
                , (error, recordSet) => {
                    if (error) {
                        console.log(error);
                    } else {
                        res.send(`usuário criado com sucesso: ${req.body.nome}`)
                    }
                    database.close()
                });
        }
        )
        .catch((error) => console.log(error));

});

app.use('/', router);
app.use('/teste', router);
app.use('/user/create', router);
app.use('/user/delete/:id', router);

app.listen(port, () => console.log("Servidor ouvindo"));
