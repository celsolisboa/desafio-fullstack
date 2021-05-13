# Desafio Full Stack Celso Lisboa

## Pré-requisitos

[NodeJS](https://nodejs.org/en/)
[PostgreSQL](https://www.postgresql.org/)

```shellscript
psql
CREATE USER test;
ALTER USER test WITH ENCRYPTED PASSWORD 'test';
CREATE DATABASE desafio_fullstack;
```

## Instalação API

```shellscript
npm install
npm install -g jest eslint db-migrate db-migrate-pg
```

## Executar API

`cd api/ && npm start`

## Instalação Client

