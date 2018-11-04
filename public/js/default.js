$(document).ready(function(){
    $.fn.exists = function(){
        if(this.length > 0){
            return true
        }

        return false
    };

    if($('table').exists()){
    	// Setup - add a text input to each footer cell
        $('table thead th').not('.no-filter').each( function () {
            var title = $(this).text();
            $(this).append( '<br><input type="text" class="search-size" placeholder="'+title+'" />' );
        } );
     
        // DataTable
        var table = $('table').DataTable(intialize_datatable);

        //Evitar bug do sorting
        $('.search-size').click(function(e){
            e.stopPropagation();
        });

        // Apply the search
        table.columns().every( function () {
            var that = this;
            
            $('.search-size', this.header() ).on('keyup change', function (event) {
                if ( that.search() !== this.value ) {
                    that
                        .search( this.value )
                        .draw();
                }
            } );
        } );
        
    }

    if($('#DtPedido').exists()){
        $('#DtPedido').mask('0000-00-00 00:00:00');
    }
    if($('#ValorUnitario').exists()){
        $('#ValorUnitario').mask('0000.00', {reverse: true});
    }
});