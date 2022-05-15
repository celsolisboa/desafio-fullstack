const db = require("./_database")

async function insertData(){
    await db.connect()

    //CRIAR LOGIN
    const queryUsuario = `INSERT INTO Usuario (id_usuario, email, senha) VALUES ($1, $2, $3)`
    await db.query(queryUsuario, [1, "gusthenrique273@gmail.com", "123456"])

    //CRIAR CURSO
    const queryCurso = `INSERT INTO Curso (id_curso, nome, inicio, fim) VALUES ($1, $2, $3, $4)`
    await db.query(queryCurso, [3, "Curso de Javascript", "18:00", "22:00"])

    //CRIAR PROFESSORES
    const queryProfessores = `INSERT INTO Professor (id_professor, nome) VALUES ($1, $2)`
    await db.query(queryProfessores, ["3", "Paulo Cesar"])

    //CRIAR SALA
    const querySala = `INSERT INTO Sala (id_sala, numero) VALUES ($1, $2)`
    await db.query(querySala, [3, 1003])

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