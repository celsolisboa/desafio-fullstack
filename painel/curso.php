<?php 
	$titulo = "Curso";
	require_once('header_painel.php');
?>

<div class="container">
	<div class="row">
		<h2>{{nome_disciplina}}</h2>
		 <table class="table table-striped">
		 	<tr>
		 		<td>Prof.</td>
		 		<td>{{professor}}</td>
		 	</tr>
		 	<tr>
		 		<td>Sala</td>
		 		<td>{{sala}}</td>
		 	</tr>
		 	<tr>
		 		<td>Horário</td>
		 		<td>{{horario}}</td>
		 	</tr>
		 </table>
		 
	</div>
</div>

<script>
	
	
	listarCursos( function( resposta ){ 
		if( resposta.erro == 0 ){ 
			
			for(var i=0; i<resposta.dados.length; i++){ 
				
				var id = resposta.dados[i].curso.id;
				var nome_disciplina = resposta.dados[i].curso.disciplina.nome;
				var horario_inicio = resposta.dados[i].curso.horario_inicio.replace(":00","");
				var horario_fim = resposta.dados[i].curso.horario_fim.replace(":00","");
				var horario = horario_inicio + " às " + horario_fim;
				
				var arrProfessores = resposta.dados[i].professores;
				var professores = "";
				var virg = "";
				for(var j=0; j<arrProfessores.length; j++){
					if( j > 0){
						virg = ", ";
					}
					professores += virg + arrProfessores[j].nome;					
				}
				
				var arrSalas = resposta.dados[i].salas;
				var salas = "";
				var virg = "";
				for( var j=0; j<arrSalas.length; j++){
					if( j > 0){
						virg = ", ";
					}
					salas +=  virg + arrSalas[j].numero ;					
				}
				
				html = html.replace("{{nome_disciplina}}", nome_disciplina);
				html = html.replace("{{horario}}", horario); 
				html = html.replace("{{id}}", id); 
				html = html.replace("{{professores}}", professores);
				html = html.replace("{{salas}}", salas);
				
				$( ".container > .row" ).append( html );
			}
			
			$(".boxCurso").remove();
		}else{
			gera_modal('Erro', resposta.msg, "danger");
		}
	});
	
	function listarCursos( callback ){
		$.ajax({
		  accepts: "application/json", 
		  contentType: 'application/json; charset=UTF-8',
		  dataType: 'json',		  
		  headers :{ "email": localStorage.getItem('email'), "token": localStorage.getItem('token') },			  
		  data:{},
		  method: 'GET',
		  url: localStorage.getItem("base_url") + "/api/curso/listar/" + getParam('id'),		  
		  success: function(resposta){	   		    
		  	  callback(resposta);
		  },
		  error:  function(resposta) { 	   
		  	//location.href = localStorage.getItem('base_url') + "/erro"
		  }
		});
	}
</script>
<?php require_once('footer_painel.php'); ?>