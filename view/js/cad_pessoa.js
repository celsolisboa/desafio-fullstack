function valida_form ()	{
	var $nome		= document.querySelector('.nome');
	var $email		= document.querySelector('.email');
	var $senha		= document.querySelector('.senha');
	var $repSenha	= document.querySelector('.rep_senha');

	if (document.getElementById("nome").value.length <= 3)					{
		$nome.innerHTML	= '<div class="alert alert-danger" role="alert">Preencha o campo Nome!</div>';
		document.getElementById("nome").focus();		
		return false;
	}	else if (document.getElementById("email").value.length == 0)		{
		$email.innerHTML	= '<div class="alert alert-danger" role="alert">Preencha o campo email!</div>';
		document.getElementById("email").focus();
		return false;
	}	else if (document.getElementById("email").value.length <= 7)		{
		$email.innerHTML	= '<div class="alert alert-danger" role="alert">Email inválido!</div>';
		document.getElementById("email").focus();
		return false;
	}	else if (document.getElementById("senha").value.length == 0)		{
		$senha.innerHTML	= '<div class="alert alert-danger" role="alert">Preencha o campo senha!</div>';
		document.getElementById("senha").focus();
		return false;
	}	else if (document.getElementById("senha").value.length < 6)			{
		$senha.innerHTML	= '<div class="alert alert-danger" role="alert">Campo senha está com menos de 6 dígitos!</div>';
		document.getElementById("senha").focus();
		return false;
	}	else if (document.getElementById("senha").value.length > 10)		{
		$senha.innerHTML	= '<div class="alert alert-danger" role="alert">Campo senha está com mais de 10 dígitos!</div>';
		document.getElementById("senha").focus();
		return false;
	}	else if (document.getElementById("rep_senha").value.length == 0)	{
		$repSenha.innerHTML	= '<div class="alert alert-danger" role="alert">Repita sua senha!</div>';
		document.getElementById("rep_senha").focus();
		return false;
	}	else if (document.myform.senha.value != document.myform.rep_senha.value)	{
		$senha.innerHTML	= '<div class="alert alert-danger" role="alert">O campo Repetir senha esta diferente!</div>';
		$repSenha.innerHTML	= '<div class="alert alert-danger" role="alert">O campo senha esta diferente!</div>';
		document.getElementById("senha").focus();
		return false;
	}

	
	document.myform.submit();
}

/*Retorna os mascaras dos campos*/
jQuery(function($){       
	$("#celular").mask("(99) 99999-9999");
});