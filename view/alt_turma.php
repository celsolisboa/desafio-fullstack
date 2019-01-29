<?php
/*
*Efetua a conexão com o banco
*/
require_once("model/alt_turma.php");

/*Chama a classe do modelo*/
$objModelsAltTurma	= new model_altTurma();


/*Retira o notice caso a session estiver vazia*/
$varAltTurmaId			= !empty($_GET["t"])				?	$_GET["t"]				:	$_POST["t"];
/*termino*/

/*Para tratamento de notice*/
if (empty($varAltTurmaId))	$varAltTurmaId	= null;
/*termino*/

/*função Listar dados da turma para alteração*/
$result	=	$objModelsAltTurma->modelsAltTurmaDadosTurma();

/*Retira o notice da tela*/
if (!empty($result))	{
	$row	= mysqli_fetch_assoc($result);
} else {
	$row["id"]				= !empty($row["id"])			?	$row["id"]				:	null;
	$row["hora_inicio"]		= !empty($row["hora_inicio"])	?	$row["hora_Inicio"]		:	null;
	$row["hora_termino"]	= !empty($row["hora_termino"])	?	$row["hora_termino"]	:	null;
	#$row["professor"]		= !empty($row["professor"])		?	$row["professor"]		:	null;
	$row["curso"]			= !empty($row["curso"])			?	$row["curso"]			:	null;
	#$row["sala"]			= !empty($row["sala"])			?	$row["sala"]			:	null;
}
/*termino*/

/*Retira o notice caso a session estiver vazia*/
$rowTurmaId		= !empty($row["id"])				?	$row["id"]				:	null;
$rowTurma		= !empty($row["turma"])				?	$row["turma"]			:	null;
$varHoraInicio	= !empty($_POST["hora_inicio"])		?	$_POST["hora_inicio"]	:	$row["hora_inicio"];
$varHoraTermino	= !empty($_POST["hora_termino"])	?	$_POST["hora_termino"]	:	$row["hora_termino"];
$varProfessor	= !empty($_POST["professor"])		?	$_POST["professor"]		:	$row["professor"];		
$varCurso		= !empty($_POST["curso"])			?	$_POST["curso"]			:	$row["curso"];
$varSala		= !empty($_POST["sala"])			?	$_POST["sala"]			:	$row["sala"];
/*termino*/
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Desafio Fullstack Master</title>
		 <meta http-equiv=Content-Type content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap CSS -->
        <link href="view/css/bootstrap_alt_turma.min.css" rel="stylesheet">
		<link href="view/css/alt_turma_family_material_icons.css"	rel="stylesheet">
        <link href="view/css/animate.css" rel="stylesheet">
        <link href='view/css/family_droid_sans.css' rel='stylesheet' type='text/css'>
        <link href='view/css/family_nixie_one.css' rel='stylesheet' type='text/css'>
        <link href="view/css/alt_turma.css" rel="stylesheet">
        
        <!-- Bootstrap Javascript -->
        <script src="view/js/jquery-1.10.2.min.js"></script>
        <script src="view/js/bootstrap.min.js"></script>
		<script src="view/js/general_validador_javaScript.js"></script>
		<script src="view/js/alt_turma.js"></script>
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
										Detalhes do Curso         
									</div>
									<a href="?pn=1">
										<i class="large material-icons">reply_all</i>
									</a>
									<?php /*Valida se for administrador exibe o menu*/if (!empty($sessAdmin))	{ ?>
									<a href="?lt=1">
										<i class="large material-icons">ballot</i>
									</a>
									<?php } ?>
									<section class="group-acesso">									
										<div class="username font-16">											
											<form name="myform" class="form-horizontal" action="?at=1" method="POST">
												<?php 
													/*função Cadastrar curso*/
													$objModelsAltTurma->modelsAltTurma();
												?>
												<div class="form-group">
													<input name="nome_curso" id="nome_curso" list="lista_curso" placeholder='Nome do Curso' maxlength="100" size='100' value='<?php print(ucfirst($varCurso)); ?>'>
														<datalist id="lista_curso">
															<select class="form-control input-md">
																<?php /*Lista Professor no select*/$objModelsAltTurma->modelsAltTurmaListCurso(); ?>
															</select>
														</datalist> 														
													<div id="avisoForm1" class="nome_curso error"></div>
												</div>												
												<div class="form-group">
													<label class="col-md-3 control-label" for="professor">Professor*</label>
													<div class="col-md-8">
														<select id="professor" name="professor[]" class="form-control input-md  appearance-select">
															<?php /*Lista Professor no select*/$objModelsAltTurma->modelsAltTurmaListProfessor($varProfessor); ?>
														</select>
														<div id="avisoForm1" class="professor error"></div>
													</div>
												</div>
												<div class="form-group">
														<label class="col-md-3 control-label" for="sala">Sala*</label>
														<div class="col-md-8">
															<select id="sala" name="sala[]" class="form-control input-md  appearance-select-sala" multiple>
																<?php /*Lista Sala no select*/$objModelsAltTurma->modelsAltTurmaListSala($rowTurma); ?>
															</select>
															<div id="avisoForm1" class="sala error"></div>
														</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label" for="hora_inicio">Hora Inicio*</label>
													<div class="col-md-8">
														<input id="hora_inicio" name="hora_inicio" type="time" class=" " placeholder="Inicio" value='<?php print($varHoraInicio); ?>'>
														<div id="avisoForm1" class="hora_inicio error"></div>
													</div>													
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label" for="nome">Hora Termino*</label>														
													<div class="col-md-8">
														<input id="hora_termino" name="hora_termino" type="time" class="" placeholder="Fim" value='<?php print($varHoraTermino); ?>'>
														<div id="avisoForm1" class="hora_termino error"></div>
													</div>
												</div>
												<input type="hidden" name="t" value="<?php print($varAltTurmaId); ?>">
												<input type="hidden" name="rt" value="<?php print(md5($rowTurma)); ?>">
												<input type="hidden" name="salvar" value="1">
												<section class="button-acesss">
													<input class="button primary-button" type="button"  id="salvar" name="salvar" value="Salvar" onclick="valida_form()">											
												</section>
											</form>
											
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




