$(document).ready(function(){
    $.fn.exists = function(){
        if(this.length > 0){
            return true
        }

        return false
    };

    if($('.time-format').exists()){
        $('.time-format').mask('H0:MN', {translation: {'N': {pattern: /[0-9]/}, 'M': {pattern: /[0-5]/}, 'H': {pattern: /[0-1]/}} });
    }

});