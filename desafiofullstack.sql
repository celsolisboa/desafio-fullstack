-- This script was generated by a beta version of the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE IF NOT EXISTS public.adonis_schema
(
    id integer NOT NULL DEFAULT nextval('adonis_schema_id_seq'::regclass),
    name character varying(255) COLLATE pg_catalog."default",
    batch integer,
    migration_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT adonis_schema_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.cursos
(
    id integer NOT NULL DEFAULT nextval('cursos_id_seq'::regclass),
    nome_curso character varying(50) COLLATE pg_catalog."default",
    inicio character varying(6) COLLATE pg_catalog."default",
    fim character varying(6) COLLATE pg_catalog."default",
    sala_id integer,
    professor_id integer,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    CONSTRAINT cursos_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.professores
(
    id integer NOT NULL DEFAULT nextval('professores_id_seq'::regclass),
    nome_professor character varying(200) COLLATE pg_catalog."default",
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    CONSTRAINT professores_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.salas
(
    id integer NOT NULL DEFAULT nextval('salas_id_seq'::regclass),
    numero_sala character varying(40) COLLATE pg_catalog."default",
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    CONSTRAINT salas_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    email character varying(254) COLLATE pg_catalog."default" NOT NULL,
    password character varying(60) COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_email_unique UNIQUE (email)
);

ALTER TABLE IF EXISTS public.cursos
    ADD CONSTRAINT cursos_professor_id_foreign FOREIGN KEY (professor_id)
    REFERENCES public.professores (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;


ALTER TABLE IF EXISTS public.cursos
    ADD CONSTRAINT cursos_sala_id_foreign FOREIGN KEY (sala_id)
    REFERENCES public.salas (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;

END;