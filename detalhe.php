<!-- Nesta seção entrará o backend para adicionar os dados no cursos.php -->

<!doctype html>
<html>

<head>

    <?php 

    include 'src/head/content.php';
    include 'src/backend/conexao.php';
    include 'src/backend/adicionaCurso.php';
    
    ?>

</head>

<body>
    <header>

        <?php include 'src/headerDetalhe/content.php' ?>

    </header>


    <?php include 'src/detalhe/content.php' ?>

</body>

</html>