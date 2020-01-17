<div class="container">

    <div class="row">

        <div class="col-lg-6" id="coluna">

            <div class="box">

                <div class="cursoName">

                    <h4>

                        Biologia

                        <span>

                            <a href="././backend/removeCurso.php?id=<?= $curso['id'] ?>" id="iconLixeira" class="iconeApagar"></a>

                        </span>

                    </h4>

                </div>


                <div>
                    Prof. Álvares de Azevedo<br>
                    Sala 502
                    <span class="horario">9:00 às 12:00</span>
                </div>

            </div>

        </div>

        <div class="col-lg-6">

            <div class="box">

                <div class="cursoName">
                    <h4>

                        Gestão

                        <span>

                            <a href="#" id="iconLixeira" class="iconeApagar" onclick="deletaCurso()"></a>

                        </span>

                    </h4>

                </div>

                <div>

                    Prof. Mário de Andrade<br>
                    Sala 301
                    <span class="horario">9:30 às 12:30</span>

                </div>

            </div>

        </div>

    </div>

    <div class="row">

        <div class="col-lg-6">

            <div class="box">

                <div class="cursoName">
                    <h4>

                        História

                        <span>

                            <a href="#" id="iconLixeira" class="iconeApagar" onclick="deletaCurso()"></a>

                        </span>

                    </h4>
                </div>

                <div>

                    Prof. Ruy Barbosa e Prof. Agatha Christie<br>
                    Sala 402
                    <span class="horario">14:45 às 18:00</span>

                </div>

            </div>

        </div>

        <div class="col-lg-6">
            <div class="box">

                <div class="cursoName">
                    <h4>

                        Matemática

                        <span>

                            <a href="#" id="iconLixeira" class="iconeApagar" onclick="deletaCurso()"></a>

                        </span>

                    </h4>
                </div>

                <div>

                    Prof. Mário Quintana<br>
                    Sala 302 e 303
                    <span class="horario">14:45 às 18:00</span>

                </div>

            </div>

        </div>

        <div class="col-lg-6" id="coluna">

        <?php

        $curso = listaCurso($conexao);
        foreach ($cursos as $curso) :

        ?>
            <div class="box">

                <div class="cursoName">

                    <h4>

                        <?= $curso['nomeCurso'] ?>

                        <span>

                            <a href="././backend/removeCurso.php?id=<?= $curso['id'] ?>" id="iconLixeira" class="iconeApagar"></a>

                        </span>

                    </h4>

                </div>


                <div>
                    <?= $curso['professor'] ?> <br>
                    <?= $curso['sala'] ?>
                    <span class="horario"><?= $curso['horarioInicio'] ?> às <?= $curso['horarioFim'] ?></span>
                </div>

            </div>

            <?php
            endforeach;

            ?>

        </div>


    </div>

</div>

<script>
</script>