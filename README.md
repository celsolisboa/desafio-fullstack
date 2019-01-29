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

4.Baixe o arquivo desafio-fullstack-master.sql e execute no banco para criação das tabelas e dados necessários para efetuar os testes;

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

7) Na mesma tela de alteração de usuário é possível transformar os perfins que são diferentes de usuário em administrador do sistema para efetuar as mesmas alterações;

8) Agora na tela curso cadastre os crusos que serão exibidos repare que os professores que aparecem são os que são apontados como perfil professores na tela de alteração de usuário;

OBS: Perceba que o campo curso resgata os cursos cadastrados para não ser necessário digitar novamente nem ficar com nomes duplicados no banco;

9) Após terem criado os cursos clique na parte superior da tela mesmo de cadastro de cursos ou clique na seta para voltar para 
o painel de controle;

OBS: Exibe todos os cursos cadastrados e clicando no botão de alteção ao lado do curso é possível efetuar alterações;

10) Para visualizar com usuário os cursos clique na imagem de olho na parte superior da tela mesmo de lista de cursos ou clique na seta para voltar para 
o painel de controle e clique em visualizar é a ultima imagem do painel de controle;