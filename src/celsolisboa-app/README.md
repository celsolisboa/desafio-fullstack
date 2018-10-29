# Instalação

## Configurando ambiente

- Instale o [node](https://nodejs.org/en/)
- Clonar o repositório
- Acessar o diretório `src/celsolisboa-app`
- Rodar `npm install` no terminal de comando
- Rodar o projeto usando `npm run build`

## Banco de dados

Por default, a aplicação está configurada para apontar para um banco de dados criado no Azure. Para alterar, vá em `database/db-config` e altere as configurações. O script de criação do banco está na seção [ddl](ddl) deste documento.
### DDL <a name="ddl'>
Rode o comando SQL contido no arquivo [ddl.sql](ddl.sql) para criação do banco de dados local já com os dados iniciais.


## Rodar modo de desenvolvimento

Rodar `npm run dev` para rodar a aplicação em modo de desenvolvimento com nodemon rodando escutando alterações no server.js.



