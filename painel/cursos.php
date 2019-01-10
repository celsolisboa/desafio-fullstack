<?php  
	$titulo = "Cursos";
	require_once('header_painel.php');
?>

<div class="container">
	<div class="row">
		<div class="boxCurso">
			<div class="col-lg-6 col-12 boxCursoCp clearfix">
				<div class="card" > 
					<a href="curso.php?id={{id}}">
					  <div class="card-body">
					    <h5 class="card-title">
					    	{{nome_disciplina}}
					    	<i id="{{id}}" class="fa fa-trash float-right btnExcluir"></i> 
					    </h5>					    
					    <div class="row">				    	
					    	<input type="hidden" name="id" class="id" value="{{id}}">
					    	<div class="col-8">
					    		<p class="card-text">
								    Prof. <span class="professor">{{professores}}</span>
								    <br>
								    Sala <span class="sala">{{salas}}</span>
							    </p> 
					    	</div>
					    	<div class="col-4">
					    		<p class="card-text text-right">
						    		<br>
						    		<span class="horario">{{horario}}</span>
					    		</p>
					    	</div>					    
					    </div>					   				     
					  </div>
				   </a>
				</div>
			</div>
		</div>
		 
	</div>
</div>

<script>
	
	
	function excluirCurso(id){
		gera_confirm("Deseja realmente excluir o curso?", function(resposta){
			if( resposta == true ){
				var url = localStorage.getItem("base_url") + "/api/curso/"+id;		
				requisicaoAjax( url, 'delete', {}, function( resposta ){				 
					
					if( resposta ){
						location.href = localStorage.getItem("base_url") + "/painel/cursos.php";	
					}
									
				});
			} 
		});
	}
	
	
	var url = localStorage.getItem("base_url") + "/api/cursos";
		
	requisicaoAjax( url, 'get', {}, function( resposta ){
		if( resposta.erro == 0 ){ 
		
			for(var i=0; i<resposta.dados.length; i++){
				var html = $(".boxCurso").html();
				
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
				html = html.replace(/{{id}}/g, id); 
				html = html.replace("{{professores}}", professores);
				html = html.replace("{{salas}}", salas);
				
				$( ".container > .row" ).append( html );
			}
			
			$(".boxCurso").remove();
			
			$(".btnExcluir").on('click', function(event){
				var id = $(event.target).attr('id');
				event.preventDefault(); 
				excluirCurso( id );
				return false;
			});
	
		}else{
			gera_modal('Erro', resposta.msg, "danger");
		}
	});
	
	 
</script>
<?php require_once('footer_painel.php'); ?>