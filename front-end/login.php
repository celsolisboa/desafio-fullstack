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


<script>
 	var url = location.protocol + "//" + location.hostname + "/desafio-fullstack";
 	
 	localStorage.setItem("base_url", url);
	 
	function logar(event){ 
		event.preventDefault();
		
		var email = event.target.querySelector('#email').value.trim();
		var senha = event.target.querySelector('#senha').value.trim();
		 		 
		$.ajax({
		  accepts: "application/json", 
		  contentType: 'application/json; charset=UTF-8',
		  dataType: 'json',
		  data:{ 'email': email, 'senha': senha },
		  method: 'GET',
		  url: localStorage.getItem("base_url") + '/api/usuario/logar',		   
		  success: function(resposta){
		  	if( resposta.erro == 1 ){
				gera_modal("Erro", resposta.msg, "danger");
			} else{		
				localStorage.setItem("email", email);
				localStorage.setItem("token", resposta.dados.token);		
				window.location.href = "painel/cursos.php";
			}
		  }, 
		});	
		  
	}
</script>

<?php require_once('footer.php'); ?>

