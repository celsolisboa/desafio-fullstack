$(document).ready( function(){	 
	
	var email = localStorage.getItem('email');
	var token = localStorage.getItem('token');
	
	if( email != '' && token != '' ){
		$.ajax({
		  accepts: "application/json", 
		  contentType: 'application/json; charset=UTF-8',
		  dataType: 'json',		  
		  headers :{ "email": email, "token": token },			  
		  data:{},
		  method: 'GET',
		  url: localStorage.getItem("base_url") + "/api/usuario/verificarToken", 
		  success: function(resposta){	    
		  	if( resposta.erro == 1 ){
		  		location.href = localStorage.getItem("base_url");
			}	   
		  } 
		});
	}else{
			
		location.href = localStorage.getItem("base_url");
	}
	
	 
});