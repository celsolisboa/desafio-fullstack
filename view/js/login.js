function valida_form ()	{
	var $username	= document.querySelector('.username');
	var $senha		= document.querySelector('.senha');

	if (document.getElementById("username").value.length == 0)		{
		$username.innerHTML	= '<div class="alert alert-danger" role="alert">Preencha o campo usuário!</div>';
		document.getElementById("username").focus();		
		return false;
	} else if (document.getElementById("username").value.length < 7)		{
		$username.innerHTML	= '<div class="alert alert-danger" role="alert">Usuário inválido!</div>';
		document.getElementById("username").focus();		
		return false;
	}	else if (document.getElementById("senha").value.length == 0)		{
		$senha.innerHTML	= '<div class="alert alert-danger" role="alert">Preencha o campo senha!</div>';
		document.getElementById("senha").focus();
		return false;
	}	else if (document.getElementById("senha").value.length < 6)		{
		$senha.innerHTML	= '<div class="alert alert-danger" role="alert">Senha inválida!</div>';
		document.getElementById("senha").focus();
		return false;
	}
	

	document.myform.submit();
}