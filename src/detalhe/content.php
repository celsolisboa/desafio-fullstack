<div class="container detalhe">

    <form id="formAdiciona">

        <div class="row">

            <div class="col-lg-6">

                <input type="text" id="nomeCurso" name="nomeCurso" class="form-control espaco" placeholder="Nome do Curso" autocomplete="off" required>

            </div>

            <div class="col-lg-6">

                <select class="form-control espaco" id="professor" name="professor">

                    <option value="" disabled selected>Professores</option>
                    <option value="Sávio">Sávio</option>
                    <option value="Otávio">Otávio</option>
                    <option value="Fábio">Fábio</option>

                </select>

            </div>

            <div class="col-lg-6">

                <select name="select" class="form-control espaco" id="sala" name="sala">

                    <option value="" disabled selected>Salas</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>

                </select>

            </div>

            <div class="col-lg-3">

                <input type="time" class="form-control espaco" id="horarioInicio" name="horarioInicio" placeholder="Início" min="09:00" max="21:00" required>

            </div>

            <div class="col-lg-3">

                <input type="time" class="form-control espaco" id="horarioFim" name="horarioFim" placeholder="Fim" min="10:00" max="22:00" required>

            </div>

            <div class="col-lg-12">
                <button class="btn-primary btn" id="adicionarCurso">Salvar</button>
            </div>

        </div>

    </form>

</div>

<script>
    
    /*
    var botaoAdicionar = document.querySelector("#adicionarCurso");
    botaoAdicionar.addEventListener("click", function(){

        var form = document.querySelector("#formAdiciona");

        var nomeCurso = form.nomeCurso.value;
        var professor = form.professor.value;
        var sala = form.sala.value;
        var horarioInicio = form.horarioInicio.value;
        var horarioFim = form.horarioFim.value;

        var boxCurso = document.createElement("div");

        var cursoDiv = document.createElement("div");
        var professorDiv = document.createElement("div");
        var salaDiv = document.createElement("div");
        var horarioInicioDiv = document.createElement("div");
        var horarioFimDiv = document.createElement("div");

        cursoDiv.textContent = nomeCurso;
        professorDiv.textContent = professor;
        salaDiv.textContent = sala;
        horarioInicioDiv.textContent = horarioInicio;
        horarioFimDiv.textContent = horarioFim;

        boxCurso.appendChild(cursoDiv);
        boxCurso.appendChild(professorDiv);
        boxCurso.appendChild(salaDiv);
        boxCurso.appendChild(horarioInicioDiv);
        boxCurso.appendChild(horarioFimDiv);

        var coluna = document.querySelector("#coluna");

        coluna.appendChild(boxCurso);

        


    })

    */
</script>