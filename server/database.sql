-- TABELA Curso
CREATE TABLE Curso (
    ID SERIAL PRIMARY KEY,
    Nome VARCHAR(100)
);

-- Inserindo dados na tabela Curso
INSERT INTO Curso (Nome) VALUES ('Biologia');
INSERT INTO Curso (Nome) VALUES ('Gestão');
INSERT INTO Curso (Nome) VALUES ('História');
INSERT INTO Curso (Nome) VALUES ('Matemática');

-- TABELA Professor
CREATE TABLE Professor (
    ID SERIAL PRIMARY KEY,
    Nome VARCHAR(100),
    Curso_ID INT,
    FOREIGN KEY (Curso_ID) REFERENCES Curso(ID) -- Relacionamento um para um com Curso
);

-- Inserindo dados na tabela Professor
INSERT INTO Professor (Nome, Curso_ID) VALUES ('Prof. Álvares de Azevedo', 1); -- Prof. Álvares de Azevedo - Biologia
INSERT INTO Professor (Nome, Curso_ID) VALUES ('Prof. Mario de Andrade', 2); -- Prof. Mario de Andrade - Gestão
INSERT INTO Professor (Nome, Curso_ID) VALUES ('Prof. Ruy Barbosa', 3); -- Prof. Ruy Barbosa - História
INSERT INTO Professor (Nome, Curso_ID) VALUES ('Prof. Agatha Christie', 3); -- Prof. Agatha Christie - História
INSERT INTO Professor (Nome, Curso_ID) VALUES ('Prof. Mário Quintana', 4); -- Prof. Mário Quintana - Matemática


-- TABELA Sala
CREATE TABLE Sala (
    ID SERIAL PRIMARY KEY,
    NumeroSala INT,
    Curso_ID INT, -- Removendo a restrição UNIQUE
    FOREIGN KEY (Curso_ID) REFERENCES Curso(ID)
);

-- Inserindo dados na tabela Sala
INSERT INTO Sala (NumeroSala, Curso_ID) VALUES (502, 1); -- Sala 502 é para o curso de Biologia
INSERT INTO Sala (NumeroSala, Curso_ID) VALUES (301, 2); -- Sala 301 é para o curso de Gestão
INSERT INTO Sala (NumeroSala, Curso_ID) VALUES (402, 3); -- Sala 402 é para o curso de História
INSERT INTO Sala (NumeroSala, Curso_ID) VALUES (302, 4); -- Sala 302 é para o curso de Química
INSERT INTO Sala (NumeroSala, Curso_ID) VALUES (303, 4); -- Sala 302 é para o curso de Química

-- TABELA Horário
CREATE TABLE Horario (
    ID SERIAL PRIMARY KEY,
    HoraInicio TIME,
    HoraTermino TIME,
    Curso_ID INT,
    FOREIGN KEY (Curso_ID) REFERENCES Curso(ID) -- Relacionamento um para muitos com Curso
);

-- Inserindo dados na tabela Horário
INSERT INTO Horario (HoraInicio, HoraTermino, Curso_ID) VALUES ('09:00', '12:00', 1); -- Biologia acontece das 9h às 12h
INSERT INTO Horario (HoraInicio, HoraTermino, Curso_ID) VALUES ('09:30', '12:30', 2); -- Gestão acontece das 9h30 às 12h30
INSERT INTO Horario (HoraInicio, HoraTermino, Curso_ID) VALUES ('14:45', '18:00', 3); -- História acontece das 14:45h às 18h
INSERT INTO Horario (HoraInicio, HoraTermino, Curso_ID) VALUES ('14:45', '18:00', 4); -- História acontece das 14:45h às 18h


-- Criar a tabela grade_academica
CREATE TABLE grade_academica (
    ID SERIAL PRIMARY KEY, -- Definindo a coluna ID como SERIAL para autoincrementar
    Curso VARCHAR(100),
    Professor VARCHAR(100),
    Sala INT,
    HoraInicio TIME,
    HoraTermino TIME
);
-- Insere dados na tabela grade_academica e seleciona
-- os dados das tabelas Curso, Professor, Sala e Horario
-- Realiza JOIN entre as tabelas Curso, Professor, Sala e Horario
-- Agrupa os dados por Curso, HoraInicio e HoraTermino
INSERT INTO grade_academica (Curso, Professor, Sala, HoraInicio, HoraTermino)
SELECT 
    c.Nome AS Curso,
    string_agg(p.Nome, ' e ') AS Professor,
    string_agg(s.NumeroSala::VARCHAR, ' e ') AS Sala,
    h.HoraInicio,
    h.HoraTermino
FROM Curso c
JOIN Professor p ON c.ID = p.Curso_ID
JOIN Sala s ON c.ID = s.Curso_ID
JOIN Horario h ON c.ID = h.Curso_ID
GROUP BY c.Nome, h.HoraInicio, h.HoraTermino;

SELECT * FROM grade_academica;

