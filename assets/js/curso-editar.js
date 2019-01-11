
var url = localStorage.getItem("base_url") + "api/curso/"+getParam('id');
	
requisicaoAjax( url, 'get', {}, function( resposta ){
	if( resposta.erro == 0 ){  
		console.log(resposta);
		var id = resposta.dados[0].curso.id;
		var nome = resposta.dados[0].curso.disciplina.nome;
		var inicio = resposta.dados[0].curso.horario_inicio;
		var fim = resposta.dados[0].curso.horario_fim;
		var salas = resposta.dados[0].salas;
		var professores = resposta.dados[0].professores;
		
		$("#id").val(id);
		$("#nome").val(nome);
		$("#inicio").val(inicio);
		$("#fim").val(fim);
		
		for(var i=0; i<salas.length; i++){			 
			//$("#salas").val(salas[i].id);	
			$('#salas option[value=' + salas[i].id + ']').attr('selected', true);	
		}
		
		for(var i=0; i<professores.length; i++){			 
			//$("#professores").val(professores[i].id);
			$('#professores option[value=' + professores[i].id + ']').attr('selected', true);	
		}
		
		$("#salas").trigger("chosen:updated");
		$("#professores").trigger("chosen:updated");
		
		
	}else{
		gera_modal('Erro', resposta.msg, "danger");
	}
});
	