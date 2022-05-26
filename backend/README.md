# Adonis API application

### Agora na pasta backend rodar o comando `npm install`, após a instalação crie um arquivo .env e cole as sequites configurações:
`HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_NAME=AdonisJs
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=LlIVOk3e0A1Xyoxe0hQi58APLvRm9SpP
DB_CONNECTION=pg
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=
DB_DATABASE=desafiofullstack
HASH_DRIVER=bcrypt
` . 

### Cirei uma banco com nome do desafio. basta configurar para o de sua preferência.
- O arquivo .sql para criar as tabelas está na raiz do projeto.
- Aqui você tem duas opções, a primeira rodar o .sql no banco ou apenas entrar na pasta backend e rodar `npx adonis migration:run`,
que irá criar suas tabelas no banco.
- importante falar que foram usadas duas views com inner join... uma com nome de 'curso' e a outra  'curso_single' do banco para lista os cursos. também está na raiz do projeto o código de consulta.
- Antes de listar ou cadastrar os cursos primeiro crie alguns professores e salas "na mão" nas tabelas para que não ocorra erros nos selects ou algo parecido.
- Depois de conseguir se conectar ao banco e rodar as migrations, no terminal execute `npm run start` para ligar o servidor da API REST.
- Login de teste é : email:`teste@gmail.com` e a senha: `123456`. login correto, vai para página de cursos.