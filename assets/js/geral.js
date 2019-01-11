if( localStorage.getItem("base_url") == null ){
	var port = location.port == 80 ? "" : ":"+location.port;

	var _pathname = location.pathname == "" ? "/" : "";
	var url = location.protocol + "//" + location.hostname +  port + location.pathname;
	 

	localStorage.setItem("base_url", url);
}


 


function requisicaoAjax( url, metodo, params, callback ){
	$.ajax({
	  accepts: "application/json", 
	  contentType: 'application/json; charset=UTF-8',
	  dataType: 'json',		  
	  headers :{ "email": localStorage.getItem('email'), "token": localStorage.getItem('token') },			  
	  data: params,
	  method: metodo,
	  url: url,		  
	  success: function(resposta){	   		    
	  	  callback(resposta);
	  },
	  error:  function(resposta) { 	   
	  	//location.href = localStorage.getItem('base_url') + "/erro"
	  }
	});
}
 	
 	
function gera_alert(texto, classe, divContainer){

	html = "<div class='alert alert-" + classe + "'>" + texto + "</div>"; 

	$(divContainer).html(html);

}


function gera_confirm( texto, callback ){
  
  var htmlconfirm = "<div class='modal' id='mi-modal' tabindex='-1' role='dialog'>"+
					  "<div class='modal-dialog' role='document'>"+
					    "<div class='modal-content'>"+
					      "<div class='modal-header'>"+
					        "<h5 class='modal-title'>Confirmação</h5>"+
					        "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>"+
					          "<span aria-hidden='true'>&times;</span>"+
					        "</button>"+
					      "</div>"+
					      "<div class='modal-body'>"+
					        "<p>"+texto+"</p>"+
					      "</div>"+
					      "<div class='modal-footer'>"+
					        "<button type='button' id='modal-btn-si' class='btn btn-primary'>Sim</button>"+
					        "<button type='button' id='modal-btn-no' class='btn btn-secondary' data-dismiss='modal'>Não</button>"+
					      "</div>"+
					    "</div>"+
					  "</div>"+
					"</div>";

  if( $("#mi-modal").length == 0 ){
  	$("body").append( htmlconfirm );
  }				
   
  $("#mi-modal").modal('show');
  
  $("#modal-btn-si").on("click", function(){
    callback(true); 
    $("#mi-modal").modal('hide');
	$("#confirmlLabel").html("Confirmar?");
	$("#modal-btn-si").off("click"); 
	 $(".modal").remove();
  });
  
  $("#modal-btn-no").on("click", function(){
    callback(false);
    $("#mi-modal").modal('hide');
	 $("#confirmlLabel").html("Confirmar?");
	 $("#modal-btn-no").off("click");
	  $(".modal").remove(); 
  });
  
 
};


//gera modal 
function gera_modal(titulo, texto, classe){
	var html = "<div class='modal fade' id='logoutModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>"+
      "<div class='modal-dialog' role='document'>"+
        "<div class='modal-content'>"+
          "<div class='modal-header alert-"+classe+"'>"+
            "<h5 class='modal-title' id='exampleModalLabel'>"+titulo+"</h5>"+
            "<button class='close' type='button' data-dismiss='modal' aria-label='Close'>"+
              "<span aria-hidden='true'>X</span>"+
            "</button>"+
          "</div>"+
          "<div class='modal-body'>"+texto+"</div>"+ 
        "</div>"+
      "</div>"+
    "</div>";
	
	$(html).modal();

}

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}