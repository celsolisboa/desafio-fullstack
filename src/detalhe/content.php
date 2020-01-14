<div class="container detalhe">

    <div class="row">

        <div class="col-lg-6">

            <input type="text" id="nomeCurso" class="form-control espaco" placeholder="Nome do Curso" autocomplete="off" required>

        </div>

        <div class="col-lg-6">

            <select class="form-control espaco" id="professor">

                <option value="" disabled selected>Professores</option>
                <option value="1">Sávio</option>
                <option value="2">Otávio</option>
                <option value="3">Fábio</option>

            </select>

        </div>

        <div class="col-lg-6">

            <select name="select" class="form-control espaco" id="sala">

                <option value="" disabled selected>Salas</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>

            </select>

        </div>

        <div class="col-lg-3">

            <input type="time" class="form-control espaco" id="horarioInicio" placeholder="Início" min="09:00" max="21:00" required>

        </div>

        <div class="col-lg-3">

            <input type="time" class="form-control espaco" id="horarioFim" placeholder="Fim" min="10:00" max="22:00" required>

        </div>

        <div class="col-lg-12">
            <button class="btn-primary btn" onclick="adicionar()">Salvar</button>
        </div>
    </div>
</div>

<script>
    function adicionar() {
        var nomeCurso = document.getElementById("nomeCurso");
        var professor = document.getElementById("professor");
        var sala = document.getElementById("sala");
        var horarioInicio = document.getElementById("horarioInicio");
        var horarioFim = document.getElementById("horarioFim");

        if (nomeCurso.value !== "" && professor.value !== "" && sala.value !== "" && horarioInicio.value !== "" && horarioFim.value !== ""){
            
            console.log("Adicionado")
            //alert('Adicionado com sucesso');

        }

        //alert('Adicionado com sucesso!');

    }
</script>