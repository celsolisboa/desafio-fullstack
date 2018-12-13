<!-- File: src/Template/Users/login.ctp -->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
 <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>

<div class="container">
<?= $this->Form->create() ?>
<div class="login-form">
    <form accept-charset="utf-8" action="/users/login" method="post">
        <h2 class="text-center">Login</h2>       
        <div class="form-group">
            <input name="username" type="text" class="form-control" placeholder="Email" required="required">
        </div>
        <div class="form-group">
            <input name="password" type="password" class="form-control" placeholder="Senha" required="required">
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">Acessar</button>
        </div>     
    </form>
</div>
</div>