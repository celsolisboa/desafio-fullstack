API Curso

#Introdução</br>

Esta API executa um CRUD de informações sobre curso. 
Exibindo no formato JSON: curso, Professor, Sala, Horário de início e horário de fim. 
Este projeto é simples e básico. 
O intuito deste é mostrar de forma fácil como consumir dados utilizando padrão Rest.

#Instalação</br>

1- Utilize o arquivo apiCursos.sql, para a criação da base de dados.</br>
2- Modifique o arquivo api/config/config.php, com as informações para acessar o banco de dados MYSQL.</br>
3- Crie um diretório no servidor web e baixe e descompacte o conteúdo deste repositório.</br>
4- Por padrão usuario: admin@admin.com e senha: 123456.</br>

#Sobre</br>

Neste projeto foi utilizado o AJAX para comunicação da interface com a API. </br>
Não foi utilizado validações de sala, horário, autenticação dentro outras deixando o projeto o mais básico possível.</br>

#Autenticação</br>

Não existe autenticação com a API. O login é básico utilizando apenas autenticação de usuario e senha.</br>

#Codigos de Erro</br>

Codigos de status e erros.</br>

create</br>
201 - Cadastrado com sucesso. </br>
503 - Serviço indisponível, problemas para criar o curso. </br>
400 - Dados incompetos.</br>

Delete</br>
200 - O curso foi deletado com sucesso. </br>
503 - Serviço indisponível, problemas para deletar o curso</br>

Loging</br>
200 - Logado com sucesso. </br>
503 - Erro ao logar.</br>

read_one</br>
200 - Curso localizado com sucesso. </br>
503 - Curso não existe.</br>

read_paging</br>
200 - Sucesso na paginação. </br>
404 - Nenhum curso encontrado.</br>

read</br>
200 - listar cursos com sucesso. </br>
404 - Nenhum curso encontrado.</br>

search</br>
200 - curso localizado com sucesso. </br>
404 - Nenhum curso encontrado.</br>

update</br>
200 - Curso atualizado com sucesso. </br>
503 - Serviço indisponível, problemas para atualizar o curso.</br>

----------------------------------------------------
#Rotas</br>

Lista os cursos</br>
POST curso/api/curso/read.php</br>

Lista o curso selecionado pelo idcurso</br>
GET curso/api/curso/read_one.php?idcurso=</br>

Deleta o curso selecionado pelo idcurso</br>
GET curso/api/curso/delete.php?idcurso=</br>

Cadastra curso</br>
POST curso/api/curso/create.php</br>

Atualiza dados de um curso selecionado pelo idcurso</br>
GET curso/api/curso/update.php?idcurso=</br>
