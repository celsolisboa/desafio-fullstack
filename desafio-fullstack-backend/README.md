# DesafioFullstackBackend

## Instalação

```bash
$ npm install
```

## Inicialização

```bash
# development
$ npm run start
```

## Conexão com o banco de dados
- Crie um arquivo `.env`
- Adicione as seguintes configurações:

```bash
DATABASE_HOST=
DATABASE_PORT=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_NAME=
```

## Criar banco de dados
- Automático
```bash
Ao iniciar o projeto, as tabelas vão ser automaticamente criadas.
```
- Manual
```bash
Importe o arquivo create-database.sql em seu pgadmin (ou algum outro que esteja utilizando).
```
[Arquivo para criar banco de dado](./create-database.sql)
