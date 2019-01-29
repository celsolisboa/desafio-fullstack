<?php
/*
*Efetua a conexão com o banco
*/
require_once("model/list_turma.php");

/*Chama a classe do modelo*/
$objModelListTurma	= new model_listTurma();
?>
<!DOCTYPE html>
<html>
    <head>
       <title>Desafio Fullstack Master</title>
       
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap CSS -->
        <link href="view/css/bootstrap_list_pessoa.min.css" rel="stylesheet">
		<link href="view/css/list_turma_family_material_icons.css"	rel="stylesheet">
		<link href="view/css/jquery.dataTables.min.css" rel="stylesheet">
        <link href="view/css/animate.css" rel="stylesheet">
        <link href='view/css/family_droid_sans.css' rel='stylesheet' type='text/css'>
        <link href='view/css/family_nixie_one.css' rel='stylesheet' type='text/css'>
        <link href="view/css/list_turma.css" rel="stylesheet">
        
        <!-- Bootstrap Javascript -->
		<script src="view/js/jquery-1.5.2.min.js"></script>
		<script src="view/js/jquery.maskedinput-1.3.min.js"></script>
		<script src="view/js/general_validador_javaScript.js"></script>
		<script src="view/js/list_turma.js"></script>
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
                    <div class="masthead">
                        <h3 class="text-muted">Lista de Turmas</h3>
                    </div>
                    
                    <button class="btn btn-default btn-xs" type="button" aria-expanded="false" onclick="location.reload()">Atualizar</button>
                    <div style="text-align: right">
						<a href="?pn=1">
							<i class="large material-icons">reply_all</i>
						</a>
						<a href="?ct=1">
							<i class="large material-icons">add</i>
						</a>
						<a href="?v=1">
							<i class="large material-icons">remove_red_eye</i>
						</a>
                    </div><br /><br />

                    <table id="table-users" class="table table-striped">
                        <thead>
                            <tr>
                                <!--th>Turma</th!-->
                                <th>Professor</th>
                                <th>Curso</th>
                                <th>Sala</th>
                                <th>Hora de Inicio</th>
                                <th>Hora de Termino</th>
                                <th>Alteração</th>
                            </tr>
                        </thead>
                        <tbody>
							<?php /*função Listar turma*/$objModelListTurma->modelListTurma();	?>
							</tbody>
                    </table>
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
        <!-- Bootstrap Javascript -->
        <script src="view/js/jquery-1.10.2.min.js"></script>
        <script src="view/js/bootstrap.min.js"></script>
        <script src="view/js/bootbox.min.js"></script>
        <script src="view/js/jquery.dataTables.min.js"></script>
        <script type="text/javascript">

            $(document).ready(function() {
                $('#table-users').DataTable({
                    "language": {
                        "emptyTable": "Nenhum usuário cadastrado"
                    }
                });
            });
           

        </script>
    </body>        
</html>




