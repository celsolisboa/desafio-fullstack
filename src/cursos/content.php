<div class="container">

    <div class="row">

        <?php
        
        //enquanto encontrar dados na var retornaCurso, faça
        while ($dados = mysqli_fetch_array($retornaCurso)) { ?>

            <div class="col-lg-6" id="coluna">

                <div class="box">

                    <div class="cursoName">

                        <h4>

                            <?php echo $dados["nomeCurso"]; ?>

                            <span>

                                <a href="src/backend/removeCurso.php?id=<?= $dados['id'] ?>" id="iconLixeira" class="iconeApagar"></a>

                            </span>

                        </h4>

                    </div>

                    <div>
                        Prof. <?php echo $dados["professor"]; ?><br>
                        Sala <?php echo $dados["sala"]; ?>
                        <span class="horario"> <?php echo $dados["horarioInicio"] ?> às <?php echo $dados["horarioFim"]; ?></span>
                    </div>

                </div>

            </div>

        <?php }; ?>

    </div>

</div>

<script>

</script>