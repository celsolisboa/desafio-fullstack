<!DOCTYPE html>
<html>
    <head>
        <title>Desafio Fullstack Master</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap CSS -->
        <link href="view/css/bootstrap_painel.min.css" rel="stylesheet">
		<link href="view/css/pn_pessoa_family_material_icons.css"	rel="stylesheet">
        <link href="view/css/animate.css" rel="stylesheet">
        <link href='view/css/family_droid_sans.css' rel='stylesheet' type='text/css'>
        <link href='view/css/family_nixie_one.css' rel='stylesheet' type='text/css'>
        <link href="view/css/painel.css" rel="stylesheet">
        
        <!-- Bootstrap Javascript -->
        <script src="view/js/jquery-1.10.2.min.js"></script>
        <script src="view/js/bootstrap.min.js"></script>
		<script src="view/js/painel.js"></script>

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
										Painel de Controle         
									</div>
									<section class="group-acesso">
										<div class="username font-16">
										<a href="?cu=1">
											<img src="view/img/cadastro.png"			title="Cadastro de pessoa!">
										</a>
										<a href="?lu=1">
											<img src="view/img/usuario_cadastrado.png"	title="Lista de pessoas!">
										</a>
										<a href="?ct=1">
											<img src="view/img/cad_turma.png"	title="Cadastrar turma!"><p></p>
										</a>
										<a href="?lt=1">
											<img src="view/img/listar_turma.png"		title="Listar turmas!">
										</a>
										<a href="?v=1">
											<img src="view/img/visualizacao.png"		title="Relatorio de compras!">
										</a>
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