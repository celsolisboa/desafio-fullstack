# Desafio Celso Lisboa

## Objetivo
Este projeto foi elaborado para a avaliação no processo seletivo para a vaga de *desenvolvedor fullstack* e todo o desenvolvimento consiste em informações
em criar um simples sistema de cursos.
## Tecnologias
Front end: HTML, CSS, JAVASCRIPT e Bootstrap.
Back end: PHP com o framework Laravel.
Banco de dados: Mysql

## Instruções de instalação
1. Abra o seu banco de dados e crie um Schema
2. Dentro do projeto você tem um arquivo .env, abra ele e adicione as informações do seu banco de dados.
3. Acesse a pasta do projeto por um terminal e execute o comando * php artisan serve * 
4. Após você ter digitado o comando acima abra um navegador e acesse o sistema pelo o endereço * 127.0.0.1:8000 * 
5. Abra um novo terminal e acesse a pasta do projeto e nela você executa o comando * php artisan migrate:fresh * para inserir as tabelas no banco de dados
6. Execute o comando * php artisan db:seed * para inserir registros padrões
7. Abra um navegador execute a url: http://127.0.0.1:8000/ para acessar o sistema e clique em * REGISTER, *  e crie uma conta.
8. Com a sua conta criar, é só ir até http://127.0.0.1:8000/login e acessar o sistema.

### Observação
Não feche o terminal onde você está rodando o comando * php artisan serve * e se quiser abrir o sistema e só abrir a pasta do projeto via terminal e digitar o comando php artisan serve --port=8080 ou a porta que preferir.

## Manual de uso

### Cursos
Em cursos você tem duas opções, uma para listar todos os cursos e cadastrar para inserir um novo curso.
Vale ressaltar que ao clicar em listar os cursos você poderá excluir e editar o curso.

### Salas
Em salas você consegue visualizar todas as salas cadastradas.

### Professores
Em professores você verá a lista de professores cadastrados.

#### Qualquer dúvida é só entrar em contato comigo.



