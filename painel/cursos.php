<?php  
	$titulo = "Cursos";
	require_once('header_painel.php');
?>

<div class="container">
	<div class="row">
		<div class="boxCurso">
			<div class="col-lg-6 col-12 boxCursoCp clearfix">
				<div class="card" > 
					<a href="editar-curso.php?id={{id}}">
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


<script src="../assets/js/cursos-listar.js"></script>
<?php require_once('footer_painel.php'); ?>