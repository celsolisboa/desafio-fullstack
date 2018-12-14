<!doctype html>
<html lang="pt-br">
  <head>
    <!-- Required meta tags -->
    
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.4.0/bootbox.min.js" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <title>API Cursos</title>
  </head>
  <body  style="background:#ccc;" onload="carregarCampos();">
  <?php include 'header.php';?>
   <div id="message"></div>
    <div class="container" style="margin-top:20px;">
    
        <div class="card">
        <h5 class="card-header text-center"><div class="float-left"><a href="index.php" class="bt bt-primary"><i class="fas fa-arrow-left"></i></a></div>Detalhes do Curso</h5>
                <div class="card-deck"> 
                    
                </div>
         </br>
        </div>

    </div>
    
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->

    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-serialize-object/2.5.0/jquery.serialize-object.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script>
            function carregarCampos(){
                
                    var create_curso_html="";
                    var read_professor_html="";
                    var read_sala_html="";

                // carrega o select de proifessor 
                $.getJSON("../api/professor/read.php", function(data){
                    
                    // build professor option html
                    // loop through returned list of data
                    

                    read_professor_html+="<select name='idprofessor' class='form-control' required>";
                    $.each(data.records, function(key, val){
                        read_professor_html+="<option value='" + val.idprofessor + "'>" + val.professor + "</option>";
                    });
                    read_professor_html+="</select>";
                    // inject to 'page-content' of our app
                    $(".professor").html(read_professor_html);
                });
                
                // carrega o select de sala 
                $.getJSON("../api/sala/read.php", function(data){
                    
                    // build sala option html
                    // loop through returned list of data
                    

                    read_sala_html+="<select name='idsala' class='form-control' required>";
                    $.each(data.records, function(key, val){
                        read_sala_html+="<option value='" + val.idsala + "'>" + val.sala + "</option>";
                    });
                    read_sala_html+="</select>";
                    // inject to 'page-content' of our app
                    $(".sala").html(read_sala_html);
                });
                

                create_curso_html+='<div class="container">';  
                    create_curso_html+='<form action="inserir.php" method="post" id="enviar">';
                        create_curso_html+='<div class="form-row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" style="margin-top:10px;">';
                            
                            create_curso_html+='<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"  style="margin-top:10px;">';
                            create_curso_html+='<input type="text" name="curso" class="form-control" id="curso" placeholder="Nome do Curso" required>';
                            create_curso_html+='</div>';

                            create_curso_html+='<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 professor"  style="margin-top:10px;">';
                            create_curso_html+= '';
                            create_curso_html+=' </div>';

                        create_curso_html+='</div>';

                        create_curso_html+='<div class="form-row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">';

                            create_curso_html+='<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 sala" style="margin-top:10px;" required>';
                            create_curso_html+= '';
                            create_curso_html+='</div>';

                            create_curso_html+='<div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3" style="margin-top:10px;" required>';
                            create_curso_html+='<input type="text" name="inicio" class="form-control" id="inicio" placeholder="Inicio">';
                            create_curso_html+='</div>';

                            create_curso_html+='<div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3" style="margin-top:10px;" required>';
                            create_curso_html+='<input type="text" name="fim" class="form-control" id="fim" placeholder="Fim">';
                            create_curso_html+='</div>';

                        create_curso_html+='</div>';

                            create_curso_html+='<div class="row justify-content-center" style="margin-top:10px;">';    
                            create_curso_html+='<button type="submit" class="btn btn-primary col-8 col-sm-8 col-md-4 col-lg-4 col-xl-4">Salvar</button>';
                            create_curso_html+='</div>';

                    create_curso_html+='</form>';
                create_curso_html+='</div>';

                $(".card-deck").html(create_curso_html);


            

            $( 'form#enviar').on('submit', function(){
                    // get form data
                    var form_data=JSON.stringify($(this).serializeObject());
                    
                   // submit form data to api
                        $.ajax({
                            url: "../api/curso/create.php",
                            type : "POST",
                            contentType : 'application/json',
                            data : form_data,
                            success : function(result) {
                                $("#message").html(
                                                    '<h7 class="text-success">'
                                                        + result.message +
                                                    '</h7>');
                                
                                setTimeout(function () { window.location.href = "inserir.php" }, 4000);
                                
                                
                            },
                            error: function(xhr, resp, text) {
                                // show error to console
                                alert(xhr, resp, text);
                                
                            }
                        });
                        
                        return false;
                });
            };
    </script>
  </body>
</html>