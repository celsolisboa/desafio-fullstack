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
    //  alert(data);
     location.reload();
    },
      type:"POST", url:"../Api/adicionarProfessorCursoSala"}); 


   }


}

