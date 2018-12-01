<?php 
	
	session_start();

	
	if((isset($_POST['email'])) && (isset($_POST['senha']))){
	$email = $_POST['email']; 
	$senha = $_POST['senha']; 
	//var_dump($_POST);

	include '../../control/ConteudoControl.php';
	
	$result = new ConteudoControl();
	
	$rs = $result->login($email, $senha);
	//var_dump($rs->usuario);
        if(!empty($rs)) { 
        
            $_SESSION['usuario'] = $rs->usuario;
            
            header('location:index.php');
        }
        else{ 
            echo "<h5 class=\"alert alert-danger box-msg\" role=\"alert\">Usuário ou senha inválido!</h5>";
        } 
	}

            if(isset($_GET['logout']) && $_GET['logout'] == 'sim')
            {
                unset($_SESSION['usuario']);
               
                session_destroy();
             }
?>
<!doctype html>
<html lang="pt-br">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <title>API Cursos</title>
  </head>
  <body>

    <div class="container text-center col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" style="margin-top:10%;">
            <div class="card align-self-center">
                <h5 class="text-center" style="margin-top:40px;">Login</h5>
                    <div class="card-body">
                        <form action="#" method="post">
                            <div class=""  style="margin-top:20px;">
                              
                                <input type="email" name="email" class="form-control" placeholder="Email">
                                
                            </div>
                            <div class=""  style="margin-top:20px;">
                               
                                <input type="password" name="senha" class="form-control" placeholder="Senha">
                            </div>
                        
                            <button type="submit" class="btn btn-dark col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style="margin-top:20px; margin-bottom:40px;">Acessar</button>
                        </form>
                    </div>
            </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  </body>
</html>