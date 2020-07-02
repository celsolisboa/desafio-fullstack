const express = require('express');
const routes_users = require('./routes/Users/routes')
const routes_courses = require('./routes/Courses/routes')

const cors = require('cors')

require('./database/index.js')

const app = express();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    res.header('Acess-Control-Allow-Origin', '*');
    res.header(
        'Acess-Control-Allow-Header',
        'Origin, X-Requested-With, X-Total-Count, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Acess-Control-Allow-Method', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

//usando as rotas
app.use(routes_users)
app.use(routes_courses)

app.listen(3333, function(){
    console.log("Servidor iniciado na porta 3333");
});