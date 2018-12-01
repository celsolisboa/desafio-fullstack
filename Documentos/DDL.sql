create database cursos_cl;

use cursos_cl;

create table curso (
	id int not null auto_increment,
    nome varchar(100) not null,
    hr_inicio time not null,
    hr_fim time not null,
    primary key(id)
);

create table professor (
	id int not null auto_increment,
    nome varchar(100) not null,
    primary key(id)
);

create table sala (
	id int not null auto_increment,
    descricao varchar(50) not null,
    primary key(id)
);

create table curso_professor (
	curso_id int not null,
    professor_id int not null,
    primary key(curso_id, professor_id),
    foreign key (curso_id) references curso(id),
    foreign key (professor_id) references professor(id)
);

create table curso_sala (
	curso_id int not null,
    sala_id int not null,
    primary key(curso_id, sala_id),
    foreign key (curso_id) references curso(id),
    foreign key (sala_id) references sala(id)
);