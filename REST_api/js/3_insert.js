const db = require("./_database")

async function insertData(){
    await db.connect()

    //CRIAR LOGIN
    const queryUsuario = `INSERT INTO Usuario (id_usuario, email, senha) VALUES ($1, $2, $3)`
    await db.query(queryUsuario, [1, "gusthenrique273@gmail.com", "123456"])

    //CRIAR CURSO
    const queryCurso = `insert into novo_curso(nome, inicio, fim, professor, sala) values($1, $2, $3, $4)`
    await db.query(queryCurso, ["Curso de Javascript", "18:00", "22:00", "Gustavo", 1001])

    //CRIAR PROFESSORES
    const queryProfessores = `INSERT INTO Professor (id_professor, nome) VALUES ($1, $2)`
    await db.query(queryProfessores, ["3", "Paulo Cesar"])

    //CRIAR SALA
    const querySala = `INSERT INTO Sala (numero) VALUES ($1)`
    await db.query(querySala, [1001])

    //CRIAR PROFESSORES DOS CURSOS
    const queryProfessoresCursos = `INSERT INTO Professor_Curso (profcurso_id, professor_id, curso_id) VALUES ($1, $2, $3)`
    await db.query(queryProfessoresCursos, [1, 3, 1])

    //CRIAR SALAS DOS CURSOS
    const querySalaCursos = `INSERT INTO Sala_Curso (salacurso_id, sala_id, curso_id) VALUES ($1, $2, $3)`
    await db.query(querySalaCursos, [1, 2, 2])

    await db.end()

    console.log('Linhas criadas')
}

insertData();