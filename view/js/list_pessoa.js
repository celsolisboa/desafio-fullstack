function valida_form ()	{
	var $nome		= document.querySelector('.nome');
	//var $email		= document.querySelector('.email');
	//var $telefone	= document.querySelector('.telefone');
	var $celular	= document.querySelector('.celular');
	//var $cpf		= document.querySelector('.cpf');

	/*Verifica se as senhas estão foras dos padrões de segurança*/
	/*var arrNumerosLetras = "00000000 , 0000000 , 000000 , 11111111 , 1111111 , 111111 , 22222222 , 2222222 , 222222 , 33333333 , 3333333 , 333333 , 44444444 , 4444444 , 444444 , 55555555 , 5555555 , 555555 , 66666666 , 6666666 , 666666 , 77777777 , 7777777 , 777777 , 88888888 , 8888888 , 888888 , 99999999 , 9999999 , 999999 , 12345678 , 1234567 , 123456 , AAAAAAAA , AAAAAAA , AAAAAA , BBBBBBBB , BBBBBBB , BBBBBB , CCCCCCCC , CCCCCCC , CCCCCC , DDDDDDDD , DDDDDDD , DDDDDD , EEEEEEE , EEEEEEEE , EEEEEE , FFFFFFFF , FFFFFFF , FFFFFF , GGGGGGGG , GGGGGGG , GGGGGG , HHHHHHHH , HHHHHHH , HHHHHH , IIIIIIII , IIIIIII , IIIIII , JJJJJJJJ , JJJJJJJ , JJJJJJ , KKKKKKKK , KKKKKKK , KKKKKK , LLLLLLLL , LLLLLLL , LLLLLL , MMMMMMMM , MMMMMMM , MMMMMM , NNNNNNNN , NNNNNNN , NNNNNN , OOOOOOOO , OOOOOOO , OOOOOO , PPPPPPPP , PPPPPPP , PPPPPP , QQQQQQQQ , QQQQQQQ , QQQQQQ , RRRRRRRR , RRRRRRR , RRRRRR , SSSSSSSS , SSSSSSS , SSSSSS , UUUUUUUU , UUUUUUU , UUUUUU , VVVVVVVV , VVVVVVV , VVVVVV , WWWWWWWW , WWWWWWW , WWWWWW , XXXXXXXX , XXXXXXX , XXXXXX , YYYYYYYY , YYYYYYY , YYYYYY , ZZZZZZZZ , ZZZZZZZ , ZZZZZZ";

	var $replaceNome	= arrNumerosLetras.value.replace($password, ",");

	alert($replaceNome);*/
	/*Testetar*/	

	if (document.getElementById("nome").value.length <= 3)		{
		$nome.innerHTML	= 'Preencha o campo Nome!';
		document.getElementById("nome").focus();		
		return false;
	}	else if (document.getElementById("celular").value.length <= 11)		{
		$celular.innerHTML	= 'Preencha o campo Celular!';
		document.getElementById("celular").focus();
		return false;
	}

	
	document.myform.submit();
}

/*Retorna os mascaras dos campos*/
jQuery(function($){       
	$("#telefone").mask("(99) 9999-9999");
	$("#celular").mask("(99) 99999-9999");
	//$("#data_nasc").mask("99/99/9999");
	//$("#cep").mask("99999 999");
	//$("#cpf").mask("00000000000");
	//$("#password").mask("");
});