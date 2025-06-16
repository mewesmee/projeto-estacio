<?php 
    require_once('conectar.php');
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $query= "SELECT usuarios.nome, usuarios.telefone FROM usuarios WHERE emaiL = '$email' AND  senha='$senha'";
    $result = pg_query($conn, $query);
    if (pg_num_rows($result) == 0) {
        echo "usuario ou senha errados<br>";
    }
    if (pg_num_rows($result) > 0) {
        echo "usuario encontrado<br>";
        echo 'logando .......... <br>';
        sleep(1);
        header("Location: cardapio.php");
    }
