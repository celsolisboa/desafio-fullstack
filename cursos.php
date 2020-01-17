<!doctype html>
<html>

<head>

    <?php 
    
    include 'src/head/content.php';
    include 'src/backend/conexao.php';
    include 'src/backend/bancoCurso.php';

    ?>

</head>

<body>
    <header>

        <?php include 'src/headerCurso/content.php' ?>

    </header>

    <?php include 'src/cursos/content.php' ?>

</body>

</html>