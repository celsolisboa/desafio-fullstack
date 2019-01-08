
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