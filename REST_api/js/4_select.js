const db = require("./_database")

async function listData(){
    await db.connect()
    var result

    //USUARIOS
    result = await db.query("select * from usuario")
    console.table(result.rows);

    //CURSOS
    result = await db.query("select * from curso")
    console.table(result.rows);

    //PROFESSORES
    result = await db.query("select * from professor")
    console.table(result.rows);

    //SALAS
    result = await db.query("select * from sala")
    console.table(result.rows);

    //PROFESSORES DE CURSOS
    result = await db.query("select * from professor_curso")
    console.table(result.rows);

    //SALAS DO CURSO
    result = await db.query("select * from sala_curso")
    console.table(result.rows);

    await db.end()
}

listData()
