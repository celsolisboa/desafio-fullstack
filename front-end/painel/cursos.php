<?php 
	$titulo = "Cursos";
	require_once('header_painel.php');
?>

<div class="container">
	<div class="row">
		<div class="col-md-6">
			<div class="card" > 
			  <div class="card-body">
			    <h5 class="card-title">
			    	Nome do curso 
			    	<i class="fa fa-trash float-right"></i>
			    </h5>
			    <div class="row">
			    	<div class="col">
			    		<p class="card-text">
						    Professor:
						    <br>
						    Sala:
					    </p> 
			    	</div>
			    	<div class="col">
			    		<p class="card-text text-right">
				    		<br>
				    		Hórário:
			    		</p>
			    	</div>
			    </div>
			     
			  </div>
			</div>
		</div> 
	</div>
</div>
<?php require_once('footer_painel.php'); ?>