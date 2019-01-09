<?php 
	$titulo = "Cursos";
	require_once('header_painel.php');
?>

<div class="container">
	<div class="row">
		<div class="boxCurso">
			<div class="col-lg-6 col-12 boxCursoCp clearfix">
				<div class="card" > 
				  <div class="card-body">
				    <h5 class="card-title">
				    	{{nome_disciplina}}
				    	<a href="curso.php?id={{id}}"><i class="fa fa-trash float-right"></i></a>
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
				</div>
			</div>
		</div>
		 
	</div>
</div>

<script>
	
	
	listarCursos( function( resposta ){ 
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
		  url: localStorage.getItem("base_url") + "/api/curso/listar",		  
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