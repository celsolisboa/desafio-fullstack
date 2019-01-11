<?php require_once('header.php'); ?>

<div class="container">
	<div class="col-md-4 offset-md-4">
		<h1 class="text-center">LOGIN</h1>
		<form method="get" onsubmit="logar(event)">
		  <div class="form-group">
		    <label>Email</label>
		    <input type="email" class="form-control" id="email" placeholder="Email" required>	     
		  </div>
		  <div class="form-group">
		    <label>Senha</label>
		    <input type="password" class="form-control" id="senha" placeholder="Senha" required>
		  </div> 
		  <div class="form-group">
		  	<button type="submit" class="btn btn-primary" style="width: 100%">Acessar</button>
		  </div>  
		</form>
	</div>
</div>


 
<script src="assets/js/index.js"></script>
<?php require_once('footer.php'); ?>

