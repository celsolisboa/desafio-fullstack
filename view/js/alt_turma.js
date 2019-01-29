function valida_form ()	{
	
	
	
	var $nomeCurso		= document.querySelector('.nome_curso');
	var $professor		= document.querySelector('.professor');
	var $sala			= document.querySelector('.sala');
	var $horaInicio		= document.querySelector('.hora_inicio');
	var $horaTermino	= document.querySelector('.hora_termino');

	if (document.getElementById("nome_curso").value == "")					{
		$nomeCurso.innerHTML	= '<div class="alert alert-danger" role="alert">Preencha o campo Nome Curso!</div>';
		document.getElementById("nome_curso").focus();		
		return false;
	}	else if (document.getElementById("nome_curso").value.length < 3)					{
		$nomeCurso.innerHTML	= '<div class="alert alert-danger" role="alert">Preencha o campo Nome Curso com mais de 3 caracter!</div>';
		document.getElementById("nome_curso").focus();		
		return false;
	}	else if (document.getElementById("professor").value == "")		{
		$professor.innerHTML	= '<div class="alert alert-danger" role="alert">Preencha o campo Professor!</div>';
		document.getElementById("professor").focus();
		return false;
	}	else if (document.getElementById("sala").value == "")		{
		$sala.innerHTML	= '<div class="alert alert-danger" role="alert">Preencha o campo Sala!</div>';
		document.getElementById("sala").focus();
		return false;
	}	else if (document.getElementById("hora_inicio").value == "")		{
		$horaInicio.innerHTML	= '<div class="alert alert-danger" role="alert">Preencha o campo Hora de Inicio!</div>';
		document.getElementById("hora_inicio").focus();
		return false;
	}	else if (document.getElementById("hora_termino").value == "")			{
		$horaTermino.innerHTML	= '<div class="alert alert-danger" role="alert">Preencha o campo Hora de Termino!</div>';
		document.getElementById("hora_termino").focus();
		return false;
	} else {
		document.getElementById("salvar").focus();
	}
	
	document.myform.submit();
}

