									#######################################
									#####Celso Lisboa para FullStack#######
									#######################################

###Versão dos aplicativo###
*Packages:

*Apache 2.4.37
*PHP 7.1.24
*MySQL 5.7.24
*Smarty 3.1.33
*SQLite 3.25.3
*PhpMyAdmin 4.8.3
*Xdebug 2.6.1 / 2.5.5

###Instalação do sistema###
1.Baixe todo sistema (Pastas: controller, database, model, view e Arquivos: conexao.php, index.php) para dentro de uma raiz;

2.Acesse o arquivo de conexão e onde está onde está escrito o trecho a baixo próximo a linha 19 configure o host, usuario e senha:
/*Banco de Homologação*/
private static $dbtypeHomolog	= "mysql";
private static $hostHomolog		= "localhost";
private static $portHomolog		= "3306";
private static $userHomolog		= "root";
private static $passwordHomolog	= "vertrigo";
/*termino*/

3.Acesse o arquivo de conexão e onde está onde está escrito o trecho a baixo próximo a linha 35 configure o nome do banco no caso está como desafio-fullstack-master:
/*Retorna o nome do banco de Homologação*/
private static $dbHomolog	= "desafio-fullstack-master";
/*Homologação*/

4.Baixe o arquivo desafio-fullstack-master(4).sql e execute no banco para criação das tabelas e dados necessários para efetuar os testes;

###FIM da Instalação do Sistema###

															###OBS####
															#ATENÇÃO!#
															##########
										- Verifique se o seu PHP está com a session_start está ativo caso estejá:
							1) Retire a linha 6 do arquivo index.php ou desative no arquivo php.ini linha 1444 comando (session.auto_start).


###Utilização das funcionalidades do sistema###

1) já existe 2 admin cadastrado 1 é o e-mail admin2@gmail.com senha 12345678 e o outro é e-mail admin2@gmail.com senha 12345678.
2) Acesse o sistema utilizando o campo usuário e senha;

3) O sistema irá te direcionar para a tela painel de controle onde se encontram 6 opções de funcionalidades: Cadastrar Usuário,
 Listar Usuário, Cadastrar Turma, Listar turma, Visualizar cursos;
 
3) Clique em cadastrar usuário para alimentar o sistema;

4) Clique em listar usuários na parte superior da tela mesmo de cadastro de usuário ou clique na seta para voltar para 
o painel de controle;

5) Clique em alterar usuário ao lado do nome do usuário cadastrado no link de alteração;

6) Altere o perfil do usuário para Professor se for o caso cadastre mais de 1 usuário para exibir na tela curso como professor;

6) Na mesma tela de alteraçãod e usuário é possível transformar o usuário em administrador do sistema para efetuar as mesmas alterações;
 