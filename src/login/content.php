<div class="container-fluid content">

    <div>

        <div class="col-lg-12">

            <form class="form-group login">

                <div class="entalheLogin"></div>

                <h4>Login</h4>

                <hr>

                <label for="email">

                    Email
                    <br>
                    <input type="email" class="form-control" placeholder="Email" required autocomplete="off">

                </label>

                <br>

                <label for="senha">

                    Senha
                    <br>
                    <input type="password" class="form-control" placeholder="Senha" required autocomplete="off">

                </label>

                <br>

                <button class="btn-primary btn" onclick="acessar()">Acessar</button>

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