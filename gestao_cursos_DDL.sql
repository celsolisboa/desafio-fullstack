CREATE TABLE IF NOT EXISTS teachers(
	id			BIGSERIAL	PRIMARY KEY,
	"name"		VARCHAR(50)	NOT NULL,
	surname 	VARCHAR(50),
	email		VARCHAR(255) NOT NULL UNIQUE,
	"password" 	VARCHAR(255) NOT NULL,
	course		VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS courses(
	id				BIGSERIAL PRIMARY KEY,
	"name"			VARCHAR(255),
	classroom_id	INTEGER,
	teacher_id		INTEGER
);

ALTER TABLE
	courses
ADD CONSTRAINT teacher_id
	FOREIGN KEY (teacher_id)
	REFERENCES teachers(id);


CREATE TABLE IF NOT EXISTS classroom(
	id		BIGSERIAL PRIMARY KEY,
	room_number	INTEGER NOT NULL,
	start_time	VARCHAR(50),
	end_time	VARCHAR(50)
);


ALTER TABLE
	courses
ADD CONSTRAINT classroom_id
	FOREIGN KEY (classroom_id)
	REFERENCES classroom(id);


CREATE TABLE IF NOT EXISTS teachers_classroom(
	id				BIGSERIAL PRIMARY KEY,
	teacher_id		INTEGER,
	classroom_id	INTEGER,
	FOREIGN KEY (teacher_id) REFERENCES teachers("id"),
	FOREIGN KEY (classroom_id) REFERENCES classroom("id")
);


INSERT INTO teachers
	("name", surname, email, "password", course)
VALUES
	('Roberto', 'Silva', 'roberto@mail.com', '123456', 'Biologia'),
	('Andre', 'Almeida', 'andre@mail.com', '123456', 'Matemática'),
	('Ricardo', 'Portinário', 'ricardo@mail.com', '123456', 'Física'),
	('Suzana', 'Cardoso', 'suzana@mail.com', '123456', 'Mecânica'),
	('Patrícia', 'Lima', 'patricia@mail.com', '123456', 'Sistemas Digitais');


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
	('Matemática', '2', '2'),
	('Física', '3', '3'),
	('Mecânica', '4', '4'),
	('Sistemas Digitais', '5', '5');


INSERT INTO teachers_classroom
	(teacher_id, classroom_id)
VALUES
	('1', '1'),
	('2', '2'),
	('3', '3'),
	('4', '4'),
	('5', '5');



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
	t."name", cl.room_number, c."name"
FROM teachers t
JOIN
	classroom cl
	ON t.id = cl.id
JOIN
	courses c
	ON c."name" = t.course;

	
SELECT 
	t."name", c."name"
FROM teachers AS t
LEFT JOIN courses AS c	
	ON t.course = c."name";
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
