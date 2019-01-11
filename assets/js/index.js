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
		  url: localStorage.getItem("base_url") + 'api/usuario/logar',		   
		  success: function(resposta){
		  	 
		  	localStorage.removeItem("email");
		  	localStorage.removeItem("token");
		  	
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