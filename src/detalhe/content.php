<div class="container detalhe">

    <form id="formAdiciona" method="GET" action="./src/backend/adicionaCurso.php">

        <div class="row">

            <div class="col-lg-6">

                <input type="text" id="nomeCurso" name="nomeCurso" class="form-control espaco" placeholder="Nome do Curso" autocomplete="off" required>

            </div>

            <div class="col-lg-6">

                <select class="form-control espaco" id="professor" name="professor">

                    <option value="" disabled selected>Professores</option>
                    <option value="Álvares de Azevedo">Álvares de Azevedo</option>
                    <option value="Mário de Andrade">Mário de Andrade</option>
                    <option value="Ruy Barbosa">Ruy Barbosa</option>
                    <option value="Agatha Christie">Agatha Christie</option>
                    <option value="Mário Quintana">Mário Quintana</option>

                </select>

            </div>

            <div class="col-lg-6">

                <select class="form-control espaco" id="sala" name="sala">

                    <option value="" disabled selected>Salas</option>
                    <option value="101">101</option>
                    <option value="201">201</option>
                    <option value="301">301</option>
                    <option value="302">302</option>
                    <option value="303">303</option>
                    <option value="401">401</option>
                    <option value="402">402</option>
                    <option value="501">501</option>
                    <option value="502">502</option>
                    
                </select>

            </div>

            <div class="col-lg-1">
                De
            </div>

            <div class="col-lg-2">
                
                <input type="time" class="form-control espaco" id="horarioInicio" name="horarioInicio" placeholder="Início" min="09:00" max="21:00" required>
                
            </div>

            <div class="col-lg-1">
                às
            </div>

            <div class="col-lg-2">

                <input type="time" class="form-control espaco" id="horarioFim" name="horarioFim" placeholder="Fim" min="10:00" max="22:00" required>

            </div>

            <div class="col-lg-12">
                <input type="submit" class="btn-primary btn" id="adicionarCurso" onclick="alerta()" value="Salvar">
            </div>

        </div>

    </form>

</div>

<script>
    
    function alerta(){
        alert("Dados adicionados");
    };

</script>