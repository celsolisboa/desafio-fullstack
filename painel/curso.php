<?php 
	$titulo = "Curso";
	require_once('header_painel.php');
?>

<div class="container">
	<div class="row">
		<div class="col-lg-5" id="conteudoCurso">
			<h2>{{nome_disciplina}}</h2>
			 <table class="table table-striped">
			 	<tr>
			 		<td>Prof.</td>
			 		<td>{{professores}}</td>
			 	</tr>
			 	<tr>
			 		<td>Sala</td>
			 		<td>{{salas}}</td>
			 	</tr>
			 	<tr>
			 		<td>Horário</td>
			 		<td>{{horario}}</td>
			 	</tr>
			 </table>
		 </div>
		 
	</div>
</div>

<script> 
	 
		
	var url = localStorage.getItem("base_url") + "/api/curso/" + getParam('id');
	
	requisicaoAjax( url, 'get', {}, function( resposta ){ 
	 
		if( resposta.erro == 0 ){ 
			var html = $("#conteudoCurso").html();
			if( resposta.dados.length > 0){
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
					
					$("#conteudoCurso").html( html );
					 
				}	
			}else{
				gera_alert("Este curso não existe!", "danger", "#conteudoCurso");
			}		
			 
		}else{
			gera_modal('Erro', resposta.msg, "danger");
		}
	});
	 
	
</script>
<?php require_once('footer_painel.php'); ?>