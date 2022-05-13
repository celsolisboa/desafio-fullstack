CREATE DOMAIN varc VARCHAR(45);

CREATE TABLE Horario (
	idHorario INT NOT NULL,
	horario DATE,
	PRIMARY KEY (idHorario)
);

CREATE TABLE UF (
	idUF INT NOT NULL,
	siglaUF VARCHAR(2),
	PRIMARY KEY (idUF)
);

CREATE TABLE Sala (
	idSala INT NOT NULL,
	numeroSala varc,
	PRIMARY KEY (idSala)
);

CREATE TABLE Bairro (
	idBairro INT NOT NULL,
	nomeBairro varc,
	PRIMARY KEY (idBairro)
);

CREATE TABLE Usuario (
	idUsuario INT NOT NULL,
	nome varc,
	cpf VARCHAR(11),
	endereco_idEndereco INT NOT NULL,
	FOREIGN KEY (endereco_idEndereco) REFERENCES Endereco (idEndereco),
	PRIMARY KEY (idUsuario)
);

CREATE TABLE Endereco (
	idEndereco INT NOT NULL,
	UF_idUF INT NOT NULL,
	bAIRRO_idBairro INT NOT NULL,
	FOREIGN KEY (UF_idUF) REFERENCES UF (idUF),
	FOREIGN KEY (Bairro_idBairro) REFERENCES Bairro (idBairro),
	PRIMARY KEY (idEndereco)
);

CREATE TABLE Professor (
	idProfessor INT NOT NULL,
	nome varc,
	endereco_idEndereco INT NOT NULL,
	Coordenador INT NOT NULL,
	FOREIGN KEY (endereco_idEndereco) REFERENCES Endereco (idEndereco),
	FOREIGN KEY (Coordenador) REFERENCES Professor (idProfessor),
	PRIMARY KEY (idProfessor)
);

CREATE TABLE Curso (
	idCurso INT NOT NULL,
	nomeCurso varc,
	descricaoCurso varc,
	endereco_idEndereco INT NOT NULL,
	Horario_idHorario INT NOT NULL,
	Professor_idProfessor INT NOT NULL,
	Sala_idSala INT NOT NULL,
	FOREIGN KEY (endereco_idEndereco) REFERENCES Endereco (idEndereco),
	FOREIGN KEY (Horario_idHorario) REFERENCES Horario (idHorario),
	FOREIGN KEY (Professor_idProfessor) REFERENCES Professor (idProfessor),
	FOREIGN KEY (Sala_idSala) REFERENCES Sala (idSala),
	PRIMARY KEY (idCurso)
);
