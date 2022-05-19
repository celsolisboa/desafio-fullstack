const db = require("./_database")

async function insertData(){
    await db.connect()

    //CRIAR LOGIN
    const queryUsuario = `INSERT INTO Usuario (email, senha) VALUES ($1, $2)`
    await db.query(queryUsuario, ["gusthenrique273@gmail.com", "123456"])
    await db.query(queryUsuario, ["gust.leles2@gmail.com", "33566296"])
    await db.query(queryUsuario, ["guseles2@gmail.com", "aiuhnfy3"])

    //CRIAR CURSO
    const queryCurso = `insert into novo_curso(nome, inicio, fim, professor, sala) values($1, $2, $3, $4)`
    await db.query(queryCurso, ["Curso de NodeJS", "12:00", "15:00", "Gustavo Henrique", 1001])
    await db.query(queryCurso, ["Curso de Angular", "16:00", "20:00", "Paulo Cesar", 1002])
    await db.query(queryCurso, ["Curso de PostgreSQL", "20:00", "23:59", "Lecy da Silva", 1003])

    //CRIAR PROFESSORES
    const queryProfessores = `INSERT INTO Professor (nome) VALUES ($1)`
    await db.query(queryProfessores, ["Gustavo Henrique"])
    await db.query(queryProfessores, ["Paulo Cesar"])
    await db.query(queryProfessores, ["Lecy da Silva"])

    //CRIAR SALA
    const querySala = `INSERT INTO Sala (numero) VALUES ($1)`
    await db.query(querySala, [1001])
    await db.query(querySala, [1002])
    await db.query(querySala, [1003])

    await db.end()

    console.log('Linhas criadas')
}

insertData();