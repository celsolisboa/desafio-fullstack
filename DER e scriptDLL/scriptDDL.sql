CREATE DATABASE IF NOT EXISTS "Database" WITH OWNER = postgres ENCODING = 'UTF8' CONNECTION
LIMIT
	= -1;

CREATE TABLE IF NOT EXISTS Usuario (
	id_Usuario serial NOT NULL,
	email VARCHAR(45),
	senha VARCHAR(45),
	PRIMARY KEY(id_Usuario)
);

CREATE TABLE IF NOT EXISTS Curso (
	id_Curso serial NOT NULL,
	nome VARCHAR(45),
	inicio DATETIME,
	fim DATETIME,
	PRIMARY KEY(id_Curso)
);

CREATE TABLE IF NOT EXISTS Sala (
	id_Sala serial NOT NULL,
	numero INT,
	PRIMARY KEY (id_Sala)
);

CREATE TABLE IF NOT EXISTS Professor (
	id_Professor INT NOT NULL,
	nome VARCHAR(45),
	PRIMARY KEY (id_Professor)
);

CREATE TABLE Professor_Curso (
	profcurso_id INT NOT NULL,
	professor_id INT NOT NULL,
	Curso_id INT NOT NULL,
	FOREIGN KEY (professor_id) REFERENCES Professor (id_Professor),
	FOREIGN KEY (Curso_id) REFERENCES Curso (id_Curso),
	PRIMARY KEY (profcurso_id)
);

CREATE TABLE IF NOT EXISTS Sala_Curso (
	Salacurso_id INT NOT NULL,
	Sala_id INT NOT NULL,
	Curso_id INT NOT NULL,
	FOREIGN KEY (Sala_id) REFERENCES Sala (id_Sala),
	FOREIGN KEY (Curso_id) REFERENCES Curso (id_Curso),
	PRIMARY KEY (Salacurso_id)
);

INSERT INTO
	Usuario (id_usuario, email, senha)
VALUES
	(1, "gusthenrique273@gmail.com", "123456");

INSERT INTO
	Curso (id_curso, nome, inicio, fim)
VALUES
	(3, "Curso de Javascript", "18:00", "22:00");

INSERT INTO
	Professor (id_professor, nome)
VALUES
	("3", "Paulo Cesar");

INSERT INTO
	Sala (id_sala, numero)
VALUES
	(3, 1003);

INSERT INTO
	Professor_Curso (profcurso_id, professor_id, curso_id)
VALUES
	(1, 3, 1);

INSERT INTO
	Sala_Curso (salacurso_id, sala_id, curso_id)
VALUES
	(1, 2, 2);