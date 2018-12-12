<!DOCTYPE html>
<html>
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="../js/curso.js" type="text/javascript"></script>


    <title>Curso</title>
    <style type="text/css">
        .curso{
            padding: 10px;
            border: 1px solid black; 
            border-radius: 10px;
            margin: 4px;
            
        }
        .aux2{
                position: relative; 
                top:20px;
                width:auto;
        }
        .div{
              color: #fff;
              background-color: #428bca;
              border-color: #428bca;
              text-align: center; 
        }

    </style>
</head>
<body>

<div class="container-fluid" style="">
    <div class="div" style="">
      <h2>Curso <a href="../curso/add"><span style="float: right; color: white;" class="glyphicon glyphicon-plus"></span></a></h2> 
           
    </div>
    <br>

  
            <div class="row" id="divPrincipal">
    
                <?= $this->Form->create() ?>                                                                  
            </div>

  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Editar</h4>
        </div>
        <div class="modal-body">
<div class="panel panel-primary">
    <div class="panel-heading">Detalhes do Curso</div>
    
    <div class="panel-body">
<div class="form-group">

<div class="col-md-11 control-label">
</div>
</div>

<!-- Text input-->
<div class="form-group">
  <div class="col-md-6">
   <select id="cd_curso"   class="form-control">
</select>
  </div>
</div>

<!-- Text input-->
<div class="form-group"> 
  <div class="col-md-6">
  <select id="cd_professor"  class="form-control">
</select>

  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <div class="col-md-6">
    <select id="cd_sala"   class="form-control">
</select>

  </div>
</div>
<!-- Text input-->
<div class="form-group"> 
  <div class="col-md-2">
  <input id="hr_inicio" name="Inicio" placeholder="Inicio" class="form-control input-md" >
  </div>
   
  <div class="col-md-2">
  <input id="hr_fim" name="Fim" placeholder="Fim" class="form-control input-md" required="" type="text" >
    <input  style="display: none" id="cd_curso_professor_sala" name="" placeholder="" class="form-control input-md" required="" type="text" >
</div>

</div>

        </div>
        <div class="modal-footer">
          <button onclick="salvarEdit()" type="button" class="btn btn-default" data-dismiss="modal">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  
</body>
</html>