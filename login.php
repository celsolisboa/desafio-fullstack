<?php
/*
*Efetua a montagem das telas do sistema
*/
require_once("model/login.php");

$objModelsLogin	=	new models_login();

/*função para validar usuário e senha*/
$objModelsLogin->modelsLoginValidaUsuario();

$_POST['username']	= (!empty($_POST['username']))	?	addslashes($_POST['username'])	:	null;
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Desafio Fullstack Master</title>
        <!--link rel="shortcut icon" href="view/img/logo.png"!-->

        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap CSS -->
        <!--link href="view/css/bootstrap.min.css" rel="stylesheet"!-->
		<link href="view/css/bootstrap_login.min.css" rel="stylesheet">
		<link href="view/css/login_family_material_icons.css"	rel="stylesheet">
        <link href="view/css/animate.css" rel="stylesheet">
        <link href='view/css/family_droid_sans.css' rel='stylesheet' type='text/css'>
        <link href='view/css/family_nixie_one.css' rel='stylesheet' type='text/css'>
        <link href="view/css/login.css" rel="stylesheet">
        
        <!-- Bootstrap Javascript -->
        <script src="view/js/jquery-1.10.2.min.js"></script>
        <script src="view/js/bootstrap.min.js"></script>
		<script src="view/js/general_validador_javaScript.js"></script>
		<script src="view/js/login.js"></script>
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
				<div class="row">
					<div class="col-md-7">
                        <div class="text-apresentacao">
							<p></p>
						</div>
                    </div>
					<div class="col-md-12">
						<div class="row">
							<div class="col-lg-offset-4 col-lg-4">
								<div class="login-content ">                           
									<div class="top-login font-24">
										Login
									</div>
									<section class="group-acesso">
										<form name="myform" class="form-horizontal" action="?" method="post">
											<div class="error">	
												<?php
													/*retorna a mensagem de ERRO de cadastro*/ 
													$objModelsLogin->modelsLoginValidaError(); 
												?>
											</div>
											<div class="font-16">
												<input type="text" id="username" name="username" value="<?php print($_POST['username']); ?>" placeholder="Digite aqui seu e-mail." >
												<div id="avisoForm1" class="username error"></div>
											</div>
											<div class="font-16">
												<input type="password" id="senha" name="senha" value="" placeholder="Digite aqui sua senha..." maxlength="10" size="10">
												<div id="avisoForm1" class="senha error"></div>
											</div>
											
											<div style="text-align: right;">
												<a href="recupera_senha.php">Efetuar cadastro.</a>
											</div>
											<input type="hidden" name="salvar" value="1">
										</form>									
										<section class="button-acesss">
											<input class="button primary-button" type="button" name="" value="Acessar" onclick="valida_form()">											
										</section>                                   
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