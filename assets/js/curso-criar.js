$('select').chosen();

listarProfessores(function(lista){
	var html = '';
	for( var i=0; i<lista.length; i++){		 
		html += "<option value='"+lista[i].id+"'>"+lista[i].nome+"</option>";
	}
	$("#professores").html(html).trigger("chosen:updated");	
	 
});

listarSalas(function(lista){
	var html = ''; 
	for( var i=0; i<lista.length; i++){
		 
		html += "<option value='"+lista[i].id+"'>"+lista[i].numero+"</option>";
	}
	$("#salas").html(html).trigger("chosen:updated");
	 
});
 

function listarProfessores(callback){
	var url = localStorage.getItem("base_url") + "api/professores";
	
	requisicaoAjax( url, 'get', {}, function( resposta ){ 
	 	
		if( resposta.erro == 0 ){  
			if( resposta.dados.length > 0){
					
				var lista = [];
				for(var i=0; i<resposta.dados.length; i++){				  
					lista[i] = resposta.dados[i];
				}	
				callback( lista );
			}else{
				gera_alert("Erro ao listar os professores!", "danger", "#conteudoCurso");
			}	
			 
		}else{
			gera_modal('Erro', resposta.msg, "danger");
		}
	});
}


function listarSalas(callback){
	var url = localStorage.getItem("base_url") + "api/salas";
	
	requisicaoAjax( url, 'get', {}, function( resposta ){ 
	 	
		if( resposta.erro == 0 ){  
			if( resposta.dados.length > 0){					
				var lista = [];
				for(var i=0; i<resposta.dados.length; i++){				  
					lista[i] = resposta.dados[i];
				}						
				callback( lista );
			}else{
				gera_alert("Erro ao listar as salas!", "danger", "#conteudoCurso");
			}				 
		}else{
			gera_modal('Erro', resposta.msg, "danger");
		}
	});
}

	

function salvarCurso(event){
	event.preventDefault();  	
	var form = event.target; 
		
	var params = {
		id : $("#id").val(),
		nome : $("#nome").val(),
		salas : $("#salas").val(),
		professores : $("#professores").val(),
		inicio : $("#inicio").val(),
		fim : $("#fim").val()
	}
	
	var url = localStorage.getItem("base_url") + "api/curso";
	
	requisicaoAjax(url,"post",params, function(resposta){
		if( resposta.erro == 0 ){
			var btn = "<a class='btn btn-sm btn-primary float-right' href='"+localStorage.getItem("base_url") + "painel/cursos.php" + "'>Voltar a listagem</a>";
			gera_modal("", resposta.msg + "<br>" + btn, "success");
		}
	});
}