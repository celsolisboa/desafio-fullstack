const db = require("./_database")

async function createTables(){
    await db.connect()

    await db.query(`CREATE TABLE IF NOT EXISTS Usuario (
        id_Usuario serial NOT NULL,
        email VARCHAR(45),
        senha VARCHAR(45),
        PRIMARY KEY(id_Usuario)
    );`)

    await db.query(`CREATE TABLE IF NOT EXISTS Curso (
        id_Curso serial NOT NULL,
        nome VARCHAR(45),
        inicio DATETIME,
        fim DATETIME,
        PRIMARY KEY(id_Curso)
    );`)

    await db.query(`CREATE TABLE IF NOT EXISTS Sala (
        id_Sala serial NOT NULL,
        numero INT,
        PRIMARY KEY (id_Sala)
    );`)

    await db.query(`CREATE TABLE IF NOT EXISTS Professor (
        id_Professor INT NOT NULL,
        nome VARCHAR(45),
        PRIMARY KEY (id_Professor)
    );`)

    await db.query(`CREATE TABLE Professor_Curso (
        profcurso_id INT NOT NULL,
        professor_id INT NOT NULL,
        Curso_id INT NOT NULL,
        FOREIGN KEY (professor_id) REFERENCES Professor (id_Professor),
        FOREIGN KEY (Curso_id) REFERENCES Curso (id_Curso),
        PRIMARY KEY (profcurso_id)
    );`)

    await db.query(`CREATE TABLE IF NOT EXISTS Sala_Curso (
        Salacurso_id INT NOT NULL,
        Sala_id INT NOT NULL,
        Curso_id INT NOT NULL,
        FOREIGN KEY (Sala_id) REFERENCES Sala (id_Sala),
        FOREIGN KEY (Curso_id) REFERENCES Curso (id_Curso),
        PRIMARY KEY (Salacurso_id)
     );`)

    await db.end()

    console.log('Tabelas criadas')
}

createTables();