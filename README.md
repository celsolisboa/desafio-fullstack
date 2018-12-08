API Curso

#Introdução

Esta API executa um CRUD de informações sobre curso. 
Exibindo no formato JSON: curso, Professor, Sala, Horário de início e horário de fim. 
Este projeto é simples e básico. 
O intuito deste é mostrar de forma fácil como consumir dados utilizando padrão Rest.

#Instalação

1- Utilize o arquivo apiCursos.sql, para a criação da base de dados.
2- Modifique o arquivo api/config/config.php, com as informações para acessar o banco de dados MYSQL.
3- Crie um diretório no servidor web e baixe e descompacte o conteúdo deste repositório.
4- Por padrão usuario: admin@admin.com e senha: 123456.

#Sobre

Neste projeto foi utilizado o AJAX para comunicação da interface com a API. 
Não foi utilizado validações de sala, horário, autenticação dentro outras deixando o projeto o mais básico possível.

#Autenticação

Não existe autenticação com a API. O login é básico utilizando apenas autenticação de usuario e senha.

#Codigos de Erro

Codigos de status e erros.

create
201 - Cadastrado com sucesso. 
503 - Serviço indisponível, problemas para criar o curso. 
400 - Dados incompetos.

Delete
200 - O curso foi deletado com sucesso. 
503 - Serviço indisponível, problemas para deletar o curso

Loging
200 - Logado com sucesso. 
503 - Erro ao logar.

read_one
200 - Curso localizado com sucesso. 
503 - Curso não existe.

read_paging
200 - Sucesso na paginação. 
404 - Nenhum curso encontrado.

read
200 - listar cursos com sucesso. 
404 - Nenhum curso encontrado.

search
200 - curso localizado com sucesso. 
404 - Nenhum curso encontrado.

update
200 - Curso atualizado com sucesso. 
503 - Serviço indisponível, problemas para atualizar o curso.

----------------------------------------------------
#Rotas

Lista os cursos
POST curso/api/curso/read.php

Lista o curso selecionado pelo idcurso
GET curso/api/curso/read_one.php?idcurso=

Deleta o curso selecionado pelo idcurso
GET curso/api/curso/delete.php?idcurso=

Cadastra curso
POST curso/api/curso/create.php

Atualiza dados de um curso selecionado pelo idcurso
GET curso/api/curso/update.php?idcurso=
