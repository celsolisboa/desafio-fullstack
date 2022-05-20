CREATE TABLE IF NOT EXISTS teachers(
	id			BIGSERIAL	PRIMARY KEY,
	"name"		VARCHAR(50)	NOT NULL,
	surname 	VARCHAR(50),
	email		VARCHAR(255) NOT NULL UNIQUE,
	"password" 	VARCHAR(255) NOT NULL	
);

CREATE TABLE IF NOT EXISTS classroom(
	id			BIGSERIAL PRIMARY KEY,
	room_number	INTEGER NOT NULL,
	start_time	VARCHAR(50),
	end_time	VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS courses(
	id				BIGSERIAL PRIMARY KEY,
	"name"			VARCHAR(255),
	classroom_id	INTEGER,
	teacher_id		INTEGER,
	FOREIGN KEY (teacher_id) REFERENCES teachers(id),
	FOREIGN KEY (classroom_id) REFERENCES classroom(id)
);


INSERT INTO teachers
	("name", surname, email, "password")
VALUES
	('Roberto', 'Silva', 'roberto@mail.com', '123456'),
	('Andre', 'Almeida', 'andre@mail.com', '123456'),
	('Ricardo', 'Portinário', 'ricardo@mail.com', '123456'),
	('Suzana', 'Cardoso', 'suzana@mail.com', '123456'),
	('Patrícia', 'Lima', 'patricia@mail.com', '123456'),
	('Poliana', 'Dimas', 'poliana@mail.com', '123456'),
	('Adriano', 'Cimas', 'adriano@mail.com', '123456'),
	('Gilian', 'Alves', 'gilian@mail.com', '123456'),
	('Eduardo', 'Chagas', 'eduardo@mail.com', '123456');


INSERT INTO classroom
	(room_number, start_time, end_time)
VALUES
	('101', '09:00', '10:40'),
	('102', '09:00', '10:40'),
	('103', '09:00', '10:40'),
	('104', '09:00', '10:40'),
	('105', '09:00', '10:40'),
	('101', '10:50', '12:30');


INSERT INTO courses
	("name", teacher_id, classroom_id)
VALUES
	('Biologia', '1', '1'),
	('Matemática', '9', '2'),
	('Física', '6', '3'),
	('Mecânica', '2', '4'),
	('Sistemas Digitais', '7', '5');



SELECT * FROM teachers;

SELECT * FROM courses;
	
SELECT * FROM classroom;	
	
SELECT
	t.*, cl.*
FROM teachers t
JOIN
	classroom cl
	ON t.id = cl.id;
	
SELECT
	t."name", cl.room_number
FROM teachers t
JOIN
	classroom cl
	ON t.id = cl.id;

	
SELECT 
	t."name", c."name"
FROM teachers AS t
JOIN courses AS c	
	ON t.id = c.id;
	
	
SELECT * FROM
	courses c
JOIN
	teachers t
	ON c.id = t.id;
	
	
SELECT * FROM 
	courses c
JOIN
	classroom cl
	ON c.id = cl.id
LEFT JOIN
	teachers t
	ON t.id = c.id;
	
	
	
INSERT INTO courses
	("name", teacher_id, classroom_id)
VALUES
	('Biologia', '1', '3'),
	('Circuitos', '3', '1'),
	('Eletrostática', '4', '6'),
	('Resmat', '5', '4'),
	('Cálculo Numérico', '8', '1');	
	
	
	
SELECT * FROM
	courses c
JOIN
	classroom cl
	ON c.id = cl.id
WHERE 
	c."name" = 'Biologia';
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

