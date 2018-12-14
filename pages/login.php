<?php 
    session_start();

    if(isset($_GET['logout']) && $_GET['logout'] == 'sim')
    {
    unset($_SESSION['usuario']);
    session_destroy();
    header('location:login.php');
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
  <body style="background:#ccc;">
  <div id="message" class="col-sm text-left col-9 col-sm-9 col-md-11 col-lg-11 col-xl-11">
    <?php //echo $_SESSION['usuario'];?>
    </div>
    <div class="container text-center col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" style="margin-top:10%;">
            <div class="card align-self-center">
                <h5 class="text-center" style="margin-top:40px;">Login</h5>
                    <div class="card-body">
                        <form action="#" method="post" id="logar">
                            <div class=""  style="margin-top:20px;">
                              
                                <input type="email" name="usuario" class="form-control" placeholder="Email">
                                
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
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-serialize-object/2.5.0/jquery.serialize-object.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  
    <script>
             $( 'form#logar').on('submit', function(){
                    // get form data
                    var form_data=JSON.stringify($(this).serializeObject());
                    
                   // submit form data to api
                        $.ajax({
                            url: "../api/curso/loging.php",
                            type : "POST",
                            contentType : 'application/json',
                            data : form_data,
                            success : function(result) {
                                $("#message").html(
                                                    '<h7 class="text-success">'
                                                        + result.message +
                                                    '</h7>');
                                
                                setTimeout(function () { window.location.href = "index.php" }, 3000);
                                 
                                
                            },
                            error: function(xhr, resp, text) {
                                // show error to console
                                alert("Erro ao logar.");
                                
                            }
                        });
                        
                        return false;
                });
  
    </script>
    </body>
</html>