const db = require("./_database")

async function dropTables() {
    await db.connect()
    await db.query('DROP TABLE curso CASCADE')
    await db.query('DROP TABLE professor CASCADE')
    await db.query('DROP TABLE professor_curso CASCADE')
    await db.query('DROP TABLE sala CASCADE')
    await db.query('DROP TABLE sala_curso CASCADE')
    await db.query('DROP TABLE usuario CASCADE')
    await db.end()

    console.log("Tabelas removidas");
}

dropTables();