# API para gestão de cursos

Após clonar o repo rodar no terminal <b>npm i</b> para instalação das </br>
dependências. Rodar <b>npm run dev</b> para iiniciar a api.

<pre>
Endpoints:

POST   - /api/login
GET    - /api/teachers
GET    - /api/classroom
GET    - /api/courses
POST   - /api/courses
PUT    - /api/courses/<id>
DELETE - /api/courses/<id>

Somente a rota de login não precisa de autorização.

Exemplo de corpo de login:

{
    "email": "roberto@mail.com",
    "password": "123456"
}

Resposta esperada:

{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJlbWFpbCI6InJvYmVydG9AbWFpbC5jb20iLCJpYXQiOjE2N
    TI5OTE0MjEsImV4cCI6MTY1MzA3NzgyMX0.
    rZIUrI2kY-BwsxiriZ6ynNOhbv9fGzmcp4-lBTACpk4"
}

As requisições GET não necessitam de corpo, apenas o token

Criação de curso:

{
    "name": "Matemática",
    "classroom": "6",
    "teacher": "7"
}

Resposta esperada:

{
    "name": "Matemática",
    "classroom": "6",
    "teacher": "7",
    "id": "15"
}

Listagem de cursos:

Resposta esperada:

[
    {
        "id": "3",
        "name": "Física",
        "teacher": {
            "id": "6",
            "name": "Poliana",
            "surname": "Dimas",
            "email": "poliana@mail.com",
            "course": null
        },
        "classroom": {
            "id": "3",
            "room_number": 103,
            "start_time": "09:00",
            "end_time": "10:40",
            "course": null
        }
    },...
...
]


Para atualização do curso ou remoção deve-se informar o id
do mesmo como parâmetro.


Exemplo de atualização:

/api/courses/13

Corpo:

{
    "classroom": 6
}



Obs: projeto em desenvolvimento.
</pre>