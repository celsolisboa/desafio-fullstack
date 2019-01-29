function detectar_mobile() {
	//Localiza o elemento
	var left = document.getElementById('left');
	//Localiza o elemento
	var right = document.getElementById('right');

	if( navigator.userAgent.match(/Android/i)
	|| navigator.userAgent.match(/webOS/i)
	|| navigator.userAgent.match(/iPhone/i)
	|| navigator.userAgent.match(/iPad/i)
	|| navigator.userAgent.match(/iPod/i)
	|| navigator.userAgent.match(/BlackBerry/i)
	|| navigator.userAgent.match(/Windows Phone/i)
	){
		left.style.width		= '100%';
		left.style.height		= '60%';
		left.style.float		= 'center'; 
		left.style.background	= '#FFFF';
		
		right.style.width		= '100%';
		right.style.height		= '60%';
		left.style.float		= 'center';
		right.style.background	= '#FFFF';
		//alert("Celular");
	} else {
		left.style.width		= '49%';
		//left.style.height		= '100%';
		left.style.float		= 'center'; 
		left.style.background	= '#FFFF';		

		right.style.width		= '49%';
		//right.style.height		= '100%';
		left.style.float		= 'right';
		right.style.background	= '#FFFF';
		//alert("Desktop");
	}
}