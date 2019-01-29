<?php
/*
*Efetua a conexão com o banco
*/
require_once("model/alt_pessoa.php");

/*Chama a classe do modelo*/
$objModelsAltPessoa	= new model_altPessoa();

#/*Retira o notice caso a session estiver vazia*/
$varAltNome			= !empty($_POST["nome"])		?	$_POST["nome"]		:	null;
$varAltEmail		= !empty($_POST["email"])		?	$_POST["email"]		:	null;
$varAltCelular		= !empty($_POST["celular"])		?	$_POST["celular"]	:	null;		
$varAltSenha		= !empty($_POST["senha"])		?	$_POST["senha"]		:	null;			
$varAltRepSenha		= !empty($_POST["rep_senha"])	?	$_POST["rep_senha"]	:	null;
$varAltFuncao		= !empty($_POST["funcao"])		?	$_POST["funcao"]	:	null;
$varAltUserId		= !empty($_GET["u"])			?	$_GET["u"]			:	$_POST["u"];

/*Para tratamento de notice*/
if (empty($varAltUserId))	$varAltUserId	= null;
/*termino*/

$result	=	$objModelsAltPessoa->modelsAltPessoaListaDados();

/*Retira o notice da tela*/
if (!empty($result))	{
	$row	= mysqli_fetch_assoc($result);
} else {
	$row["nome"]		= !empty($row["nome"])		?	$row["nome"]		:	null;
	$row["email"]		= !empty($row["email"])		?	$row["email"]		:	null;
	$row["celular"]		= !empty($row["celular"])	?	$row["celular"]		:	null;
	$row["funcao"]		= !empty($row["funcao"])	?	$row["funcao"]		:	null;
	$row["funcaoid"]	= !empty($row["funcaoid"])	?	$row["funcaoid"]	:	null;
}
/*termino*/

#/*Retira o notice caso a session estiver vazia*/
$rowUserId		= !empty($row["userid"])		?	$row["userid"]		:	null;
$varAltNome		= !empty($_POST["nome"])		?	$_POST["nome"]		:	$row["nome"];
$varAltEmail	= !empty($_POST["email"])		?	$_POST["email"]		:	$row["email"];
$varAltCelular	= !empty($_POST["celular"])		?	$_POST["celular"]	:	$row["celular"];		
$varAltSenha	= !empty($_POST["senha"])		?	$_POST["senha"]		:	null;
$varAltRepSenha	= !empty($_POST["rep_senha"])	?	$_POST["rep_senha"]	:	null;
$varAltFuncao	= !empty($row["funcao"])		?	$row["funcao"]		:	"Usuário";
$rowAltFuncaoId	= !empty($row["funcaoid"])		?	$row["funcaoid"]	:	1;
/*termino*/

/*Retorna a informação se já é ADMIN*/
$rowAdminId	= $objModelsAltPessoa->modelsAltPessoaAdmin($varAltFuncao);
/*termino*/
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Desafio Fullstack Master</title>

        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap CSS -->
        <link href="view/css/bootstrap_cad_pessoa.min.css" rel="stylesheet">
		<link href="view/css/alt_pessoa_family_material_icons.css"	rel="stylesheet">
        <link href="view/css/animate.css" rel="stylesheet">
        <link href='view/css/family_droid_sans.css' rel='stylesheet' type='text/css'>
        <link href='view/css/family_nixie_one.css' rel='stylesheet' type='text/css'>
        <link href="view/css/alt_pessoa.css" rel="stylesheet">
        
        <!-- Bootstrap Javascript -->
        <script src="view/js/jquery-1.10.2.min.js"></script>
        <script src="view/js/bootstrap.min.js"></script>
		<script src="view/js/general_validador_javaScript.js"></script>
		<script src="view/js/alt_pessoa.js"></script>
		<script type="text/javascript" src="view/js/jquery.mask.min.js"></script>
		
    </head>	
	
    <body>
        <div class="wrapper">
            <header>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-lg-12">
                            <div class="logo">
								<p class="title visible-lg visible-md">Sistema Desafio Fullstack Master<!--img src="view/img/"!--></p>
								<div class="text-center hidden-lg hidden-md">
								</div>
							</div>                     
                        </div>
                    </div>
				</div>
            </header>
			<div class="container">
				<nav class="navbar navbar-default">
						<div class="container-fluid">
							<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
								<ul class="nav navbar-nav">
									<?php /*Valida se for administrador exibe o menu*/if (!empty($sessAdmin))	{ ?>
										
									<li>
										<a href="?pn=1">Início </a>
									</li>
									<li class="dropdown">
										<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Usuários<span class="caret"></span></a>
										<ul class="dropdown-menu">
											<li><a href="?cu=1">Cadastro de usuários</a></li>
											<li><a href="?lu=1">Lista de usuários</a></li>
										</ul>
									</li>
									<li class="dropdown">
										<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Turmas<span class="caret"></span></a>
										<ul class="dropdown-menu">
											<li><a href="?ct=1">Cadastro de turmas</a></li>
											<li><a href="?lt=1">Lista de turmas</a></li>
										</ul>
									</li>
														
													
									<?php } ?>
								<li>
									<a href="?">Sair</a>
								</li>
								</ul>
							</div><!-- /.navbar-collapse -->
						</div><!-- /.container-fluid -->
				</nav> 
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">						
                            <div class="col-lg-offset-4 col-lg-4">
                                <div class="login-content ">
									<div class="top-login font-24">
										Cadastro de usuários         
									</div>									
									<a href="?pn=1">
										<i class="large material-icons">reply_all</i>
									</a>
									<a href="?lu=1">
										<i class="large material-icons">perm_contact_calendar</i>
									</a>
									<section class="group-acesso">									
										<div class="username font-16">											
											<form name="myform" class="form-horizontal" action="?au=1" method="POST">
												<?php 
													/*função Cadastrar Comprador*/
													$objModelsAltPessoa->modelsAltPessoa();
												?>
												<div class="form-group"> 
													<label class="col-md-3 control-label" for="nome">Nome*</label>
														<div class="col-md-8">
															<input name="nome" id="nome" type="text" class="form-control input-md"  placeholder='Nome completo' value='<?php print($varAltNome); ?>' maxlength="150" size='150'>
															 <div id="avisoForm1" class="nome error"></div>
														</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label" for="titulacao">Email*</label>
														<div class="col-md-8">
															<input id="email" name="email" type="text" class="form-control input-md"  placeholder='Email completo' value='<?php print($varAltEmail); ?>' maxlength="150" size='150'>
															<div id="avisoForm1" class="email error"></div>
														</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label" for="celular">Celular</label> <div class="col-md-8">
														<input id="celular" name="celular" type="text" class="form-control input-md"  placeholder='Celular completo' value='<?php print($varAltCelular); ?>'>
													</div>
												</div>
												
												<div class="form-group">
													<label class="col-md-3 control-label" for="funcao">Perfil</label> <div class="col-md-8">
														<select	id="funcao" name="funcao" class="form-control input-md"  placeholder='Funcao completo' onchange="exibe_admin();">
															<option value="<?php print($rowAltFuncaoId); ?>"><?php print($varAltFuncao); ?></option>
															<?php $objModelsAltPessoa->modelsAltPessoaListaFuncao($rowAltFuncaoId, $varAltNome, $rowUserId); ?>
														</select>                                                                
													</div>
												</div>
												<div class="form-group">
													<?php print($rowAdminId);	?>
												</div>										
												<div class="form-group">
													<label class="col-md-3 control-label" for="ies">Senha</label> <div class="col-md-8">
														<input id="senha" name="senha"  maxlength="10" type="password" class="form-control input-md"  placeholder='********' value='<?php print($varAltSenha); ?>' >
														<div id="avisoForm1" class="senha error"></div>
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label" for="ies">Senha novamente</label> <div class="col-md-8">
														<input id="rep_senha" name="rep_senha"  maxlength="10" type="password" class="form-control input-md" placeholder="********" value='<?php print($varAltRepSenha); ?>'>
														<div id="avisoForm1" class="rep_senha error"></div>
													</div>
												</div>
												<input type="hidden" name="u" value="<?php print($varAltUserId); ?>">
												<input type="hidden" name="ru" value="<?php print(md5($rowUserId)); ?>">
												<input type="hidden" name="salvar" value="1">
											</form>
											<section class="button-acesss">
											<input class="button primary-button" type="button" name="" value="Salvar" onclick="valida_form()">											
										</section>
										</div>
									</section>
								</div>
							</div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
        <footer>
			<div class="container">
                <div class="row visible-lg visible-md">
                    <div class="col-md-offset-4 col-lg-offset-5 col-md-4">
                        <address class="text-right col-md-7">
                            © 2019 - Todos os direitos reservados.<br>
                            Rio de Janeiro - RJ                      </address>

                        <address class="text-left col-md-3">
                            carlosteixeiracruz@gmail.com <br>
                        </address>                        
                    </div>
                </div>

                <div class="row hidden-lg hidden-md">
                    <div class="col-md-12">
                        <address class="text-center font-8">
                            © 2019 - Todos os direitos reservados.<br>
                            Rio de Janeiro - RJ                        </address>

                        <address class="text-center font-8">
                            carlosteixeiracruz@gmail.com <br>
                        </address>
                    </div>
                </div>
            </div>       
		</footer>
    </body>    
</html>




