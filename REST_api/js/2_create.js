const db = require("./_database")

async function createTables(){
    await db.connect()

    await db.query(`CREATE TABLE IF NOT EXISTS Usuario (
        id_Usuario BIGINT NOT NULL PRIMARY KEY,
        email VARCHAR(45),
        senha VARCHAR(45),
        PRIMARY KEY(id_Usuario)
    );`)

    await db.query(`CREATE TABLE IF NOT EXISTS Curso (
        id_Curso BIGINT NOT NULL PRIMARY KEY,
        nome VARCHAR(45),
        inicio DATETIME,
        fim DATETIME
    );`)

    await db.query(`CREATE TABLE IF NOT EXISTS novo_curso (
        id_novo_curso BIGINT NOT NULL PRIMARY KEY,
        nome VARCHAR(45),
        inicio TIME WITHOUT TIME ZONE,
        fim TIME WITHOUT TIME ZONE,
        professor VARCHAR(45),
        sala INTEGER
    );`)

    await db.query(`CREATE TABLE IF NOT EXISTS Sala (
        id_Sala BIGINT NOT NULL PRIMARY KEY,
        numero INT,
    );`)

    await db.query(`CREATE TABLE IF NOT EXISTS Professor (
        id_Professor BIGINT NOT NULL PRIMARY KEY,
        nome VARCHAR(45),
    );`)

    await db.query(`CREATE TABLE Professor_Curso (
        profcurso_id BIGINT NOT NULL PRIMARY KEY,
        professor_id INT NOT NULL,
        Curso_id INT NOT NULL,
        FOREIGN KEY (professor_id) REFERENCES Professor (id_Professor),
        FOREIGN KEY (Curso_id) REFERENCES Curso (id_Curso),
    );`)

    await db.query(`CREATE TABLE IF NOT EXISTS Sala_Curso (
        Salacurso_id BIGINT NOT NULL PRIMARY KEY,
        Sala_id INT NOT NULL,
        Curso_id INT NOT NULL,
        FOREIGN KEY (Sala_id) REFERENCES Sala (id_Sala),
        FOREIGN KEY (Curso_id) REFERENCES Curso (id_Curso),
     );`)

    await db.end()

    console.log('Tabelas criadas')
}

createTables();