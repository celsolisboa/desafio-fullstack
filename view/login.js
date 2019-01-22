function valida_form ()	{
	var $username	= document.querySelector('.username');
	var $senha		= document.querySelector('.senha');

	if (document.getElementById("username").value.length == 0)		{
		$username.innerHTML	= 'Preencha o campo usuário!';
		document.getElementById("username").focus();		
		return false;
	} else if (document.getElementById("username").value.length < 7)		{
		$username.innerHTML	= 'Usuário inválido!';
		document.getElementById("username").focus();		
		return false;
	}	else if (document.getElementById("senha").value.length == 0)		{
		$senha.innerHTML	= 'Preencha o campo senha!';
		document.getElementById("senha").focus();
		return false;
	}	else if (document.getElementById("senha").value.length < 6)		{
		$senha.innerHTML	= 'Senha inválida!';
		document.getElementById("senha").focus();
		return false;
	}
	

	document.myform.submit();
}
