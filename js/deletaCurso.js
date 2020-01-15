var deletaCurso = document.querySelectorAll(".box");

console.log(deletaCurso);

deletaCurso.forEach(function(box){
    box.addEventListener("click", function(){
        this.remove();
    })
});