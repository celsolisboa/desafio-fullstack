<?php 
// carrega todos os cursos cadastrados
$dados = json_decode(file_get_contents('http://localhost:88/curso/api/curso/read.php')); 

// deleta curso selecionado

if(isset($_GET['del']) && $_GET['del'] == 's' && $_GET['id'] <> ''){
    
    $dados = json_decode(file_get_contents('http://localhost:88/curso/api/curso/delete.php?idcurso='.$_GET['id']));
    
    header('location:index.php');
   echo $dados->message;
}
?>  
<!doctype html>
<html lang="pt-br">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <title>API Cursos</title>
  </head>
  <body style="background:#ccc;">
<?php include 'header.php';?>
    <div class="container" style="margin-top:20px;">
    
    
        <div class="card">
            <h5 class="card-header text-center">Cursos<div class="float-right"><a href="inserir.php" class="bt bt-primary"><i class="fas fa-plus"></i></a></div></h5>
                <div class="card-deck">
                    <?php foreach($dados->records as $valor){ ?>
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style="margin-top:10px;">
                            <div class="card">
                                <div class="card-body">
                                <div class="float-left"><a href="editar.php?id=<?=$valor->idcurso;?>"><?=$valor->curso;?></a></div><div class="float-right"><a href="#" onclick="deletarCurso('<?=$valor->idcurso;?>');" class="bt bt-primary"><i class="far fa-trash-alt"></i></a></div>
                                    </br></br>
                                <div class="float-left">Prof.: <?=$valor->professor;?></div></br> 
                                <div class="float-left">Sala: <?=$valor->sala;?></div><div class="float-right"><?=$valor->inicio;?> às <?=$valor->fim;?></div>
                                </div>
                            </div>
                        </div>
                    <?php } ?>
                </div>
                </br>
        </div>
    </div>
    
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script>
            
            function deletarCurso(id){
                
                    
                   // submit form data to api
                        $.ajax({
                            url: "/curso/api/curso/delete.php",
                            type : "GET",
                            contentType : 'application/json',
                            data : {'idcurso': id},
                            success : function(result) {
                                                              
                                $("#message").html(
                                                    '<h7 class="text-success">'
                                                        + result.message +
                                                    '</h7>');
                                
                                setTimeout(function () { window.location.href = "index.php" }, 4000);
                               
                            },
                            error: function(xhr, resp, text) {
                                // show error to console
                                alert('erro');
                            }
                        });
                        
                        return false;
                };
  
    </script>
</body>
</html>