<!doctype html>
<html lang="pt-br">
  <head>
    <!-- Required meta tags -->
    
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <title>API Cursos</title>
  </head>
  <body>

    <?php
    include '../../control/ConteudoControl.php';
    
    $data = file_get_contents('php://input');
    $obj =  json_decode($data);

    if(!empty($data)){	
    $conteudoControl = new ConteudoControl();
    $conteudoControl->insert($obj);

    }
    ?>  

    <div class="container" style="margin-top:20px;">
    
        <div class="card">
            <h5 class="card-header text-center">Detalhes do Curso</h5>
                <div class="card-deck"> 
                    <div class="container">  
                        <form action="">

                            <div class="form-row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" style="margin-top:10px;">

                                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"  style="margin-top:10px;">
                                    <input type="text" class="form-control" id="curso" placeholder="Nome do Curso">
                                </div>

                                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"  style="margin-top:10px;">
                                    <select name="professor" class="form-control" id="professor" placeholder="Professores">
                                        <option value=””>Professores</option>
                                        <option value=”Sagres”>Sagres</option>
                                        <option value=”Heineken”>Heineken</option>
                                        <option value=”Carlsberg”>Carlsberg</option>
                                        <option value=”Antartica”>Antartica</option>
                                        …
                                    </select>
                                </div>

                            </div>

                            <div class="form-row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

                                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style="margin-top:10px;">
                                    <select name="sala" class="form-control" id="sala" placeholder="Salas">
                                        <option value=””>Salas</option>
                                        <option value=”Sagres”>Sagres</option>
                                        <option value=”Heineken”>Heineken</option>
                                        <option value=”Carlsberg”>Carlsberg</option>
                                        <option value=”Antartica”>Antartica</option>
                                        …
                                    </select>
                                </div>

                                <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3" style="margin-top:10px;">
                                    <input type="text" class="form-control" id="inicio" placeholder="Inicio">
                                </div>

                                <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3" style="margin-top:10px;">
                                    <input type="text" class="form-control" id="fim" placeholder="Fim">
                                </div>

                            </div>

                            <div class="row justify-content-center" style="margin-top:10px;">    
                                <button type="submit" class="btn btn-primary col-8 col-sm-8 col-md-4 col-lg-4 col-xl-4">Salvar</button>
                            </div>

                        </form>
                    </div>
                </div>
         </br>
        </div>

    </div>
    
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  </body>
</html>