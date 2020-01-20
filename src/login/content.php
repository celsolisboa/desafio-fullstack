<div class="container-fluid content">

    <div>

        <div class="col-lg-12">

            <form class="form-group login" method="POST" action="./src/backend/verificaLogin.php">

                <div class="entalheLogin"></div>

                <h4>Login</h4>

                <hr>

                <label for="email">

                    Email
                    <br>
                    <input type="email" id="email" name="email" class="form-control" placeholder="Digite seu email" required autocomplete="off">

                </label>

                <br>

                <label for="senha">

                    Senha
                    <br>
                    <input type="password" id="senha" name="senha" class="form-control" placeholder="E aqui a sua senha" required autocomplete="off">

                </label>

                <br>

                <input type="submit" class="btn-primary btn" value="Acessar">

                <p class="text-danger">

                    <?php
                    


                    ?>

                </p>

            </form>

        </div>

    </div>

</div>

<script>
    function acessar() {
        //if 
        alert('Autenticado com sucesso!');
    }
</script>