
<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="../js/add.js" type="text/javascript"></script>

<!DOCTYPE html>
<head>

</head>
<body>

<form class="form-horizontal">
<fieldset>
<div class="panel panel-primary">
    <div class="panel-heading">Detalhes do Curso</div>
    
    <div class="panel-body">
<div class="form-group">

<div class="col-md-11 control-label">
        <p class="help-block"><h11>*</h11> Campo Obrigatório </p>
</div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-2 control-label" for="Nome"> <h11>*</h11></label>  
  <div class="col-md-6">
   <select id="cd_curso"   class="form-control">
</select>
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-2 control-label" for="Nome"> <h11>*</h11></label>  
  <div class="col-md-6">
  <select id="cd_professor"  class="form-control">
</select>

  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-2 control-label" for="Nome"> <h11>*</h11></label>  
  <div class="col-md-6">
    <select id="cd_sala"   class="form-control">
</select>

  </div>
</div>
<!-- Text input-->
<div class="form-group">
  <label class="col-md-2 control-label" for="Nome"> <h11>*</h11></label>  
  <div class="col-md-2">
  <input id="hr_inicio" name="Inicio" placeholder="Inicio" class="form-control input-md" >
  </div>
  
  <label class="col-md-1 control-label" for="Nome"><h11>*</h11></label>  
  <div class="col-md-2">
  <input id="hr_fim" name="Fim" placeholder="Fim" class="form-control input-md" required="" type="text" >
</div>

</div>


<!-- Button (Double) -->
<div class="form-group">
  <label class="col-md-2 control-label" for="Cadastrar"></label>
  <div class="col-md-8">
    <button  onclick="adicionar(); return false;" id="Salvar" name="Salvar" style="background-color: black; color:white;" class="btn btn-success" type="">Salvar</button>
  </div>
</div>

</div>
</div>


</fieldset>
</form>

                <?= $this->Form->create() ?> 
</body>
</html>