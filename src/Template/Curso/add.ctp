
<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  
<!--<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>--->
<!------ Include the above in your HEAD tag ---------->

<!DOCTYPE html>
<head>

    <script type="text/javascript">
      /*
        $(function() {
                var curso = [];
      $.get("../Api/listaCursos", function(data, status){
           $.each( data, function( key, val ) {
                curso.push(data[key].nm_curso);  
                    //console.log(data[key].nm_curso);
            });               
                      
          $("#cd_curso" ).autocomplete({
            source: curso
          });        
        });           
          
          console.log(curso);

        });

*/
      $.get("../Api/listarProfessores", function(data, status){
          $.each( data, function( key, val ) {
            $('#cd_professor').append('<option value="'+data[key].cd_professor+'">'+data[key].nm_professor+'</option>');

    });
                   
    });
      $.get("../Api/listarSalas", function(data, status){
          $.each( data, function( key, val ) {
            $('#cd_sala').append('<option value="'+data[key].cd_sala+'">'+data[key].nm_sala+'</option>');

    });
                   
    });

function adicionar(){


   if (confirm("Tem certeza que deseja salvar ?")) {
    var curso = {
        cd_curso: $("#cd_curso").val(), cd_sala: $("#cd_sala").val(), cd_professor : $("#cd_professor").val(), hr_inicio : $("#hr_inicio").val(), hr_fim : $("#hr_fim").val()
    }
   

  $.ajax({
    async:true,
    data: JSON.stringify(curso),
    dataType:"json",
    beforeSend: function (xhr) { // Add this line
        xhr.setRequestHeader('X-CSRF-Token', $('[name="_csrfToken"]').val());
    },  // Add this line
    success:function (data, textStatus) {
      //$("#municipio-id").html(data);
      alert(data);
     location.reload();
    },
      type:"POST", url:"../Api/adicionarProfessorCursoSala"}); 


   }


}


    </script>
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
  <input id="cd_curso" name="Nome" placeholder="Nome do Curso" class="form-control input-md" required="" type="text">
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-2 control-label" for="Nome"> <h11>*</h11></label>  
  <div class="col-md-6">
  <select id="cd_professor"   class="selectpicker">
</select>

  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-2 control-label" for="Nome"> <h11>*</h11></label>  
  <div class="col-md-6">
    <select id="cd_sala"   class="selectpicker">
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