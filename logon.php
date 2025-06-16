<h2> Criarndo conta </h2>
<?php
require_once('conectar.php');

// Recebendo os dados do formulário
$email = $_POST['email'];
$name = $_POST['name'];
$tel = $_POST['tel'];
$senha = $_POST['senha'];

// Montando o INSERT
$query = "INSERT INTO usuarios (email, nome, telefone, senha) VALUES ('$email', '$name', '$tel', '$senha')";

// Executando o comando
$result = pg_query($conn, $query);

// Verificando se deu certo
if ($result) {
    echo "Dados inseridos com sucesso!<br>";
    header("Location: cadastro.php");
} else {
    echo "Erro ao inserir dados.<br>";
}

