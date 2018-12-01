const express = require('express'),
    bodyParser = require('body-parser'),
    mysql = require('mysql');

const app = express();

//MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql@123',
    database: 'cursos_cl'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

//Bodyparsers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
const cursosRoutes = require('./routes/cursosRoutes')(app);
const professoresRoutes = require('./routes/professoresRoutes')(app);
const salasRoutes = require('./routes/salasRoutes')(app);

app.use(bodyParser.json());

const port = process.env.PORT || 4000;
const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
});