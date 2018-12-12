<!DOCTYPE html>
<html>
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">

<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script type="text/javascript">

    
     $.get("./Api/listaCurso", function(data, status){
     	  $.each( data, function( key, val ) {
     	  	$( "#divPrincipal" ).append( '<div class="col-md-3"> <div class="col-md-12 col-bg-color"> <div class="row curso" style=""><div><span style="font-size: 20px;">'+data[key].nm_curso+' <button style="float: right; margin: 0px;" class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit"><span class="glyphicon glyphicon-pencil"></span></button><button onclick="deletar('+data[key].cd_curso_professor_sala+')" style="float: right;" class="btn btn-info btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete"><span class="glyphicon glyphicon-trash"></span></button></span>  </div><br> <br><br><br><div class="aux2"><p style="height: 5px;">Professor: '+data[key].nm_professor+'</p><p>'+data[key].nm_sala+' <span style="float: right; ">'+data[key].hr_inicio+' até '+data[key].hr_fim+'</span> </p></div></div></div></div> ' );
    });
     		       
    });

function deletar(id){


   if (confirm("Tem certeza que deseja excluir ?")) {
      $.ajax({
    async:true,
    data: 'id:1',
    dataType:"html",
    beforeSend: function (xhr) { // Add this line
        xhr.setRequestHeader('X-CSRF-Token', $('[name="_csrfToken"]').val());
    },  // Add this line
    success:function (data, textStatus) {
      //$("#municipio-id").html(data);
    },
      type:"post", url:"../Api/adicionarProfessorCursoSala"});      

   }


}
</script>

    <title>Curso</title>
   
</body>
</html>