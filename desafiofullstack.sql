--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Cursos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Cursos" (
    curso_id integer NOT NULL,
    nome_curso character(60) NOT NULL,
    inicio character(6) NOT NULL,
    fim character(6),
    fk_sala integer,
    fk_professor integer
);


ALTER TABLE public."Cursos" OWNER TO postgres;

--
-- Name: Cursos_curso_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Cursos_curso_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Cursos_curso_id_seq" OWNER TO postgres;

--
-- Name: Cursos_curso_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Cursos_curso_id_seq" OWNED BY public."Cursos".curso_id;


--
-- Name: Professores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Professores" (
    professor_id integer NOT NULL,
    nome_professor character(200) NOT NULL
);


ALTER TABLE public."Professores" OWNER TO postgres;

--
-- Name: Professores_professor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Professores_professor_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Professores_professor_id_seq" OWNER TO postgres;

--
-- Name: Professores_professor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Professores_professor_id_seq" OWNED BY public."Professores".professor_id;


--
-- Name: Salas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Salas" (
    sala_id integer NOT NULL,
    numero_sala character(40) NOT NULL
);


ALTER TABLE public."Salas" OWNER TO postgres;

--
-- Name: Salas_sala_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Salas_sala_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Salas_sala_id_seq" OWNER TO postgres;

--
-- Name: Salas_sala_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Salas_sala_id_seq" OWNED BY public."Salas".sala_id;


--
-- Name: Cursos curso_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Cursos" ALTER COLUMN curso_id SET DEFAULT nextval('public."Cursos_curso_id_seq"'::regclass);


--
-- Name: Professores professor_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Professores" ALTER COLUMN professor_id SET DEFAULT nextval('public."Professores_professor_id_seq"'::regclass);


--
-- Name: Salas sala_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Salas" ALTER COLUMN sala_id SET DEFAULT nextval('public."Salas_sala_id_seq"'::regclass);


--
-- Name: Cursos Cursos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Cursos"
    ADD CONSTRAINT "Cursos_pkey" PRIMARY KEY (curso_id);


--
-- Name: Professores Professores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Professores"
    ADD CONSTRAINT "Professores_pkey" PRIMARY KEY (professor_id);


--
-- Name: Salas Salas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Salas"
    ADD CONSTRAINT "Salas_pkey" PRIMARY KEY (sala_id);


--
-- Name: Cursos fk_professor; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Cursos"
    ADD CONSTRAINT fk_professor FOREIGN KEY (fk_professor) REFERENCES public."Professores"(professor_id) NOT VALID;


--
-- Name: Cursos fk_sala; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Cursos"
    ADD CONSTRAINT fk_sala FOREIGN KEY (fk_sala) REFERENCES public."Salas"(sala_id) NOT VALID;


--
-- PostgreSQL database dump complete
--

