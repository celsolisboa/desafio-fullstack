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

<script src="../assets/js/curso-listar.js"></script>
<?php require_once('footer_painel.php'); ?>