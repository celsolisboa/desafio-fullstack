 
     $.get("../Api/listaCurso", function(data, status){
        $.each( data, function( key, val ) {
          $( "#divPrincipal" ).append( '<div class="col-md-3" style=""> <div class="col-md-12 col-bg-color"> <div class="row curso" style=""><div><span style="font-size: 20px;">'+data[key].nm_curso+' <button style="float: right; margin: 0px;" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#myModal" data-title="Edit" onclick="visualizarEdit('+data[key].cd_curso_professor_sala+')"><span class="glyphicon glyphicon-pencil"></span></button><button onclick="deletar('+data[key].cd_curso_professor_sala+')" style="float: right;" class="btn btn-info btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete"><span class="glyphicon glyphicon-trash"></span></button></span>  </div><br> <br><br><br><div class="aux2"><p style="height: 5px;">Professor: '+data[key].nm_professor+'</p><p>'+data[key].nm_sala+' <span style="float: right; ">'+data[key].hr_inicio+' até '+data[key].hr_fim+'</span> </p></div></div></div></div>' );
    });
               
    });

    $.get("../Api/listaCursos", function(data, status){
           $.each( data, function( key, val ) {
                 $('#cd_curso').append('<option value="'+data[key].cd_curso+'">'+data[key].nm_curso+'</option>'); 
            });  
   });
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
function salvarEdit(){

   if (confirm("Tem certeza que deseja salvar esta alteração ?")) {
    var curso = {
        cd_curso: $("#cd_curso").val(), cd_sala: $("#cd_sala").val(), cd_professor : $("#cd_professor").val(), hr_inicio : $("#hr_inicio").val(), hr_fim : $("#hr_fim").val(),cd_curso_professor_sala:$("#cd_curso_professor_sala").val()
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
     console.log(data);
     location.reload();
    },
      type:"PUT", url:"../Api/AtualizarProfessorCursoSala"}); 


   }  
}         
function visualizarEdit(cd_curso_professor_sala){
   

    $.get("../Api/listaCursoEspecifico/"+cd_curso_professor_sala, function(data, status){

    var c = document.getElementById("cd_curso"), i=0;

      for (; i<c.options.length; i++)
      { 
        if (c.options[i].value == data[0].cd_curso)
        {

          c.options[i].selected = true;
          break;
        }
      }    

    var c = document.getElementById("cd_sala"), i=0;

      for (; i<c.options.length; i++)
      { 
        if (c.options[i].value == data[0].cd_sala)
        {

          c.options[i].selected = true;
          break;
        }
      } 

    var c = document.getElementById("cd_professor"), i=0;

      for (; i<c.options.length; i++)
      { 
        if (c.options[i].value == data[0].cd_professor)
        {

          c.options[i].selected = true;
          break;
        }
      }               
      $('#hr_inicio').val(data[0].hr_inicio);
      $('#hr_fim').val(data[0].hr_fim);
      $('#cd_curso_professor_sala').val(data[0].cd_curso_professor_sala);
   })

}
function deletar(id){


   if (confirm("Tem certeza que deseja excluir ?")) {
    var curso = {
        id: id
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
     // alert(data);
     location.reload();
    },
      type:"DELETE", url:"../Api/deletarProfessorCursoSala"}); 


   }


}