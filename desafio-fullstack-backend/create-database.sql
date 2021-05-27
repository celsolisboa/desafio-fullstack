BEGIN;


CREATE TABLE public.classroom
(
    id integer NOT NULL,
    name character varying NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO public.classroom(
	id, name)
	VALUES (1, 'Sala 402');

CREATE TABLE public.course
(
    id integer NOT NULL,
    name character varying NOT NULL,
    "startTime" character varying NOT NULL,
    "endTime" character varying NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE public.course_classroom
(
    "courseId" integer NOT NULL,
    "classroomId" integer NOT NULL,
    PRIMARY KEY ("courseId", "classroomId")
);

CREATE TABLE public.course_teacher
(
    "courseId" integer NOT NULL,
    "teacherId" integer NOT NULL,
    PRIMARY KEY ("courseId", "teacherId")
);

CREATE TABLE public.teacher
(
    id integer NOT NULL,
    name character varying NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO public.teacher(
	id, name)
	VALUES (1, 'Pedro Henrique');

CREATE TABLE public."user"
(
    id integer NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO public."user"(
	id, email, password)
	VALUES (1, 'user@test.com', 'testpass');

ALTER TABLE public.course_classroom
    ADD FOREIGN KEY ("classroomId")
    REFERENCES public.classroom (id)
    NOT VALID;


ALTER TABLE public.course_classroom
    ADD FOREIGN KEY ("courseId")
    REFERENCES public.course (id)
    NOT VALID;


ALTER TABLE public.course_teacher
    ADD FOREIGN KEY ("teacherId")
    REFERENCES public.teacher (id)
    NOT VALID;


ALTER TABLE public.course_teacher
    ADD FOREIGN KEY ("courseId")
    REFERENCES public.course (id)
    NOT VALID;

END;