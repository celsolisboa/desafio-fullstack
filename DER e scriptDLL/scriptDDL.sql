CREATE DATABASE IF NOT EXISTS "Database" WITH OWNER = postgres ENCODING = 'UTF8' CONNECTION
LIMIT
	= -1;

CREATE TABLE IF NOT EXISTS Usuario (
	id_Usuario BIGINT NOT NULL PRIMARY KEY,
	email VARCHAR(45),
	senha VARCHAR(45)
);

CREATE TABLE IF NOT EXISTS Curso (
	id_Curso BIGINT NOT NULL PRIMARY KEY,
	nome VARCHAR(45),
	inicio TIME WITHOUT TIME ZONE,
	fim TIME WITHOUT TIME ZONE
);

CREATE TABLE IF NOT EXISTS public.novo_curso
(
    id_novo_curso bigint NOT NULL DEFAULT nextval('novo_curso_id_novo_curso_seq'::regclass),
    sala integer,
    inicio time without time zone,
    fim time without time zone,
    professor character varying(45) COLLATE pg_catalog."default",
    nome character varying(45) COLLATE pg_catalog."default",
    CONSTRAINT novo_curso_pkey PRIMARY KEY (id_novo_curso)
)

CREATE TABLE IF NOT EXISTS Professor (
	id_Professor BIGINT NOT NULL PRIMARY KEY,
	nome VARCHAR(45)
);

CREATE TABLE Professor_Curso (
	profcurso_id BIGINT NOT NULL PRIMARY KEY,
	professor_id INT NOT NULL,
	Curso_id INT NOT NULL,
	usuario_id INT NOT NULL,
	FOREIGN KEY (professor_id) REFERENCES Professor (id_Professor),
	FOREIGN KEY (Curso_id) REFERENCES Curso (id_Curso),
);

CREATE TABLE IF NOT EXISTS Sala_Curso (
	Salacurso_id BIGINT NOT NULL PRIMARY KEY,
	Sala_id INT NOT NULL,
	Curso_id INT NOT NULL,
	usuario_id INT NOT NULL,
	FOREIGN KEY (Sala_id) REFERENCES Sala (id_Sala),
	FOREIGN KEY (Curso_id) REFERENCES Curso (id_Curso),
);

INSERT INTO
	Usuario (id_usuario, email, senha)
VALUES
	(1, 'gusthenrique273@gmail.com', '123456');

INSERT INTO
	Usuario (email, senha)
VALUES
	(2, 'gust.leles2@gmail.com', '33566296');

INSERT INTO
	Usuario (email, senha)
VALUES
	(3, 'guseles2@gmail.com', 'aiuhnfy3');

INSERT INTO
	Professor (id_professor, nome)
VALUES
	(1, 'Paulo Cesar');

INSERT INTO
	Professor (id_professor, nome)
VALUES
	(2, 'Gustavo Henrique');

INSERT INTO
	Professor (id_professor, nome)
VALUES
	(3, 'Lecy da Silva');

INSERT INTO
	Sala (id_sala, numero)
VALUES
	(1, 1001);

INSERT INTO
	Sala (id_sala, numero)
VALUES
	(2, 1002);

INSERT INTO
	Sala (id_sala, numero)
VALUES
	(3, 1003);

INSERT INTO
	novo_curso(nome, inicio, fim, professor, sala)
VALUES
	('Curso de NodeJS', '12:00', '15:00', 'Gustavo Henrique', 1001);

INSERT INTO
	novo_curso(nome, inicio, fim, professor, sala)
VALUES
	('Curso de Angular', '16:00', '20:00', 'Paulo Cesar', 1002);

INSERT INTO
	novo_curso(nome, inicio, fim, professor, sala)
VALUES
	('Curso de PostgreSQL', '20:00', '23:59', 'Lecy da Silva', 1002);

