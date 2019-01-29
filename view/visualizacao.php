<?php
/*
*Efetua a montagem das telas do sistema
*/
require_once("model/visualizacao.php");

$objModelsVisualizacao	=	new models_visualizacao();
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
		<link href="view/css/bootstrap_visualizacao.min.css" rel="stylesheet">
		<link href="view/css/visualizacao_family_material_icons.css"	rel="stylesheet">
        <link href="view/css/animate.css" rel="stylesheet">
        <link href='view/css/family_droid_sans.css' rel='stylesheet' type='text/css'>
        <link href='view/css/family_nixie_one.css' rel='stylesheet' type='text/css'>
        <link href="view/css/visualizacao.css" rel="stylesheet">
        
        <!-- Bootstrap Javascript -->
        <script src="view/js/jquery-1.10.2.min.js"></script>
        <script src="view/js/bootstrap.min.js"></script>
		<script src="view/js/general_validador_javaScript.js"></script>
		<script src="view/js/visualizacao.js"></script>
		<script type="text/javascript" src="view/js/jquery.mask.min.js"></script>

    </head>
    <body onload="detectar_mobile();">
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
									<div class="top-visualizar font-24">
										Cursos
									</div>	
									<a href="?pn=1">
										<i class="large material-icons">reply_all</i>
									</a>								
									<?php /*Valida se for administrador exibe o menu*/if (!empty($sessAdmin))	{ ?>
										<a href="?lt=1">
											<i class="large material-icons">ballot</i>
										</a>
										<a href="?ct=1">
											<i class="large material-icons">add</i>
										</a>
									<?php } ?>
									<hr>
									<!--section id="left" class="left"!-->
										<?php /*função para visualização*/$objModelsVisualizacao->modelsVisualizacao(); ?>
										<!--table style="border: 1px solid #000;">
											<tr>
											<td class="titulo-curso"><strong>Biologia</td>
											<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
											<td style="text-align:right;"><span class="glyphicon glyphicon-trash" ></span></td>
											</tr>
											<tr>
											<td><br><br><br></td>
											<td><br><br><br></td>
											<td><br><br><br></td>
											</tr>
											<tr>
											<td>Prof:Mário Quitanda<br>Sala 301 e 304</td>
											<td></td>
											<td>14:45 ás 18:30</td>
											</tr>
										</table>
										<table style="border: 1px solid #000;">
											<tr>
											<td class="titulo-curso"><strong>Biologia</td>
											<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
											<td style="text-align:right;"><span class="glyphicon glyphicon-trash" ></span></td>
											</tr>
											<tr>
											<td><br><br><br></td>
											<td><br><br><br></td>
											<td><br><br><br></td>
											</tr>
											<tr>
											<td>Prof:Mário Quitanda<br>Sala 301 e 304</td>
											<td></td>
											<td>14:45 ás 18:30</td>
											</tr>
										</table>
										<table style="border: 1px solid #000;">
											<tr>
											<td class="titulo-curso"><strong>Biologia</td>
											<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
											<td style="text-align:right;"><span class="glyphicon glyphicon-trash" ></span></td>
											</tr>
											<tr>
											<td><br><br><br></td>
											<td><br><br><br></td>
											<td><br><br><br></td>
											</tr>
											<tr>
											<td>Prof:Mário Quitanda<br>Sala 301 e 304</td>
											<td></td>
											<td>14:45 ás 18:30</td>
											</tr>
										</table>
									</section>
									<section id="right" class="right">
										<table style="border: 1px solid #000;" >
											<tr>
											<td class="titulo-curso"><strong>Hitória</td>
											<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
											<td style="text-align:right;"><span class="glyphicon glyphicon-trash" ></span></td>
											</tr>
											<tr>
											<td><br><br><br></td>
											<td><br><br><br></td>
											<td><br><br><br></td>
											</tr>
											<tr>
											<td>Prof:Mário Quitanda<br>Sala 301 e 304</td>
											<td></td>
											<td>14:45 ás 18:30</td>
											</tr>
										</table>
										<table style="border: 1px solid #000;" >
											<tr>
											<td class="titulo-curso"><strong>Hitória</td>
											<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
											<td style="text-align:right;"><span class="glyphicon glyphicon-trash" ></span></td>
											</tr>
											<tr>
											<td><br><br><br></td>
											<td><br><br><br></td>
											<td><br><br><br></td>
											</tr>
											<tr>
											<td>Prof:Mário Quitanda<br>Sala 301 e 304</td>
											<td></td>
											<td>14:45 ás 18:30</td>
											</tr>
										</table>
										<table style="border: 1px solid #000;" >
											<tr>
											<td class="titulo-curso"><strong>Hitória</td>
											<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
											<td style="text-align:right;"><span class="glyphicon glyphicon-trash" ></span></td>
											</tr>
											<tr>
											<td><br><br><br></td>
											<td><br><br><br></td>
											<td><br><br><br></td>
											</tr>
											<tr>
											<td>Prof:Mário Quitanda<br>Sala 301 e 304</td>
											<td></td>
											<td>14:45 ás 18:30</td>
											</tr>
										</table>
									</section!-->								
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