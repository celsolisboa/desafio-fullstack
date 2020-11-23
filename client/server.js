const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
    res.json({
        title: 'Desafio Celso Lisboa FrontEnd',
        version: '1.0.0',
        source: 'https://github.com/celsolisboa/desafio-frontend',
        authors: [
            { name: 'Leonardo Geranio',
                url: 'https://github.com/leonardogeranio' },
            { name: 'Luiz Cerqueira',
                url: 'http://www.luizcerqueira.com.br' },
            { name: 'Nicolas Pereira',
                url: 'https://github.com/porrecobs' },
            { name: 'Phelipe Rocha',
                url: 'https://pheliperocha.com' }
        ]
    });
});

const auth = {
    'john@gmail.com': 'passwd',
    'bill@gmail.com': 'test123'
};

const users = {
    'john@gmail.com': {
        firstName: 'John'
    },
    'bill@gmail.com': {
        firstName: 'Bill'
    }
};

let cursos = [
    {
        "id": "1",
        "nome": "Biologia",
        "inicio": "9:00",
        "fim": "12:00",
        "salas": [{
            "id": 1,
            "sala": "502"
        }],
        "professores": [{
            "id": 1,
            "nome": "Álvares de Azevedo"
        }]
    },
    {
        "id": "2",
        "nome": "Gestão",
        "inicio": "9:30",
        "fim": "12:30",
        "salas": [
            {
                "id": 2,
                "sala": "301"
            }
        ],
        "professores": [
            {
                "id": 2,
                "nome": "Mario de Andrade"
            }
        ]
    },
    {
        "id": "3",
        "nome": "História",
        "inicio": "14:45",
        "fim": "18:00",
        "salas": [
            {
                "id": 1,
                "sala": "502"
            }
        ],
        "professores": [
            {
                "id": 3,
                "nome": "Ruy Barbosa"
            },
            {
                "id": 4,
                "nome": "Agatha Christie"
            }
        ]
    },
    {
        "id": "4",
        "nome": "Matemática",
        "inicio": "14:45",
        "fim": "18:00",
        "salas": [
            {
                "id": 3,
                "sala": "302"
            },
            {
                "id": 4,
                "sala": "303"
            }
        ],
        "professores": [
            {
                "id": 5,
                "nome": "Mário Quintana"
            }
        ]
    }
];

const professores = [
    {
        "id": 1,
        "nome": "Álvares de Azevedo"
    },
    {
        "id": 2,
        "nome": "Mario de Andrade"
    },
    {
        "id": 3,
        "nome": "Ruy Barbosa"
    },
    {
        "id": 4,
        "nome": "Agatha Christie"
    },
    {
        "id": 5,
        "nome": "Mário Quintana"
    }
];

const salas = [
    {
        "id": 1,
        "sala": 502
    },
    {
        "id": 2,
        "sala": 301
    },
    {
        "id": 3,
        "sala": 302
    },
    {
        "id": 4,
        "sala": 303
    },
    {
        "id": 5,
        "sala": 504
    },
    {
        "id": 6,
        "sala": 201
    }
];

app.post('/api/user/login', function (req, res) {
    const payload = req.body;

    if(auth[payload.email] && auth[payload.email] === payload.password) {
        res.status(200).json(users[payload.email]);
    } else {
        res.sendStatus(401);
    }
});

app.get('/api/curso/', function (req, res) {
    res.json({ cursos })
});

app.get('/api/curso/:id', function (req, res) {
    let curso = cursos.find((curso) => curso.id === req.params.id);
    res.json({ curso });
});

app.delete('/api/curso/:id', function (req, res) {
    let index = cursos.findIndex((curso) => curso.id === req.params.id);
    cursos.splice(index, 1);
    res.status(200).json({ status: 'success' });
});

app.post('/api/curso/', (req, res) => {
    cursos.push(req.body);
    res.status(200).json({ status: 'success' });
});

app.patch('/api/curso/:id', (req, res) => {
    let index = cursos.findIndex((curso) => curso.id === req.params.id);
    cursos[index] = req.body;
    res.status(200).json({ status: 'success' });
});

app.get('/api/professor', (req, res) => {
   res.json(professores);
});

app.get('/api/sala', (req, res) => {
    res.json(salas);
});

app.listen(port, function () {
    console.log(`Listening on http://localhost:${port}`)
});
