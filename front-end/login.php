<?php require_once('header.php'); ?>

<div class="container">
	<div class="col-md-4 offset-md-4">
		<h1 class="text-center">LOGIN</h1>
		<form>
		  <div class="form-group">
		    <label>Email</label>
		    <input type="email" class="form-control" id="email" placeholder="Email">	     
		  </div>
		  <div class="form-group">
		    <label>Senha</label>
		    <input type="password" class="form-control" id="senha" placeholder="Senha">
		  </div> 
		  <div class="form-group">
		  	<button type="submit" class="btn btn-primary" style="width: 100%">Acessar</button>
		  </div>  
		</form>
	</div>
</div>

<?php require_once('footer.php'); ?>