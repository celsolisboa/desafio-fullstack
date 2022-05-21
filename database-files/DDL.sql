CREATE TABLE IF NOT EXISTS "users" (
  "id" UUID PRIMARY KEY,
  "email" VARCHAR(100) UNIQUE NOT NULL,
  "password" VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS "courses" (
  "id" UUID PRIMARY KEY,
  "name" VARCHAR(100) NOT NULL,
  "start_time" TIME WITHOUT TIME ZONE NOT NULL,
  "end_time" TIME WITHOUT TIME ZONE NOT NULL
);

CREATE TABLE IF NOT EXISTS "courses_teachers" (
  "course_id" UUID,
  "teacher_id" UUID,
  PRIMARY KEY ("course_id", "teacher_id")
);

CREATE TABLE IF NOT EXISTS "teachers" (
  "id" UUID PRIMARY KEY,
  "name" VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS "courses_classrooms" (
  "course_id" UUID,
  "classroom_id" UUID,
  PRIMARY KEY ("course_id", "classroom_id")
);

CREATE TABLE IF NOT EXISTS "classrooms" (
  "id" UUID PRIMARY KEY,
  "number" VARCHAR(10) NOT NULL
);

ALTER TABLE "courses_classrooms" ADD FOREIGN KEY ("course_id") REFERENCES "courses" ("id");

ALTER TABLE "courses_classrooms" ADD FOREIGN KEY ("classroom_id") REFERENCES "classrooms" ("id");

ALTER TABLE "courses_teachers" ADD FOREIGN KEY ("course_id") REFERENCES "courses" ("id");

ALTER TABLE "courses_teachers" ADD FOREIGN KEY ("teacher_id") REFERENCES "teachers" ("id");

INSERT INTO users ("id", "email", "password")
VALUES ('0ea33630-b146-4aff-a219-fed903a08ac4', 'admin@admin.com', 'admin_password');

INSERT INTO teachers ("id", "name")
VALUES
	('26e35a47-eb9b-4433-a8b9-d8b44012d3c0', 'Edson Caetano'),
    ('36bd67b1-e557-4e0d-a5f7-3f7294b69ef9', 'Luisa Gravato'),
    ('08e47bfe-a7a2-4aad-aab3-581b8e93927a', 'Manuela Onofre'),
    ('749129fb-3cf8-45e6-82ec-37f96183aca3', 'Josias Fraga'),
    ('e7a5b0e8-3bfc-4b03-a1ef-1070d336c917', 'Oséias Santiago'),
    ('d3d794db-33a0-4fb8-89e5-16e91d4036dd', 'Denise Colares'),
    ('0f1df500-3099-4714-b183-f6a769149d92', 'Rogério Toscano'),
    ('e54ca51a-4318-46b5-a20c-f41f50286cf4', 'Nayara Gonçalves'),
    ('4bdcc285-1b10-44b8-9193-c32a34f9b39e', 'Rubim Alves'),
    ('d805ae7e-7cd9-4375-899f-1e78574d4e42', 'Olívia Castelhano');
    
INSERT INTO classrooms ("id", "number")
VALUES
	('6a3d680d-1496-4f3d-bb2a-a1da716dc299', '101'),
	('2c6aadf4-fb0b-4dee-be87-0c598fd18ef8', '102'),
	('59638581-9e1a-4b52-a95c-28fd881379b6', '103'),
	('a77c5f2f-cef2-4b55-ab42-26818ba81c7b', '201'),
	('4a20594d-85bf-4e7d-a0f1-cbcdefba22f4', '202'),
	('b9db1cfe-c350-4c2f-87bb-4d06c9d1dfcd', '203'),
	('23619fa4-1676-4c81-ac1e-07c40994610b', '301'),
	('227c9c8c-960a-4a01-8590-3e0fc10bef0a', '302'),
	('fd474883-ddad-426a-98bb-d27efce0fc23', '303');
