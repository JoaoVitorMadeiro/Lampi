<?php

// Configurações de conexão com o banco de dados
$servername = "localhost";
$username = "seu_usuario";
$password = "sua_senha";
$dbname = "nome_do_banco_de_dados";

// Cria a conexão com o banco de dados
$conn = new mysqli($servername, $username, $password);

// Verifica se a conexão foi estabelecida com sucesso
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

// Cria o banco de dados
$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
if ($conn->query($sql) === false) {
    die("Erro ao criar o banco de dados: " . $conn->error);
}

// Seleciona o banco de dados
$conn->select_db($dbname);

// Cria a tabela para armazenar os dados
$sql = "CREATE TABLE IF NOT EXISTS usuarios (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    senha VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    nome_completo VARCHAR(255) NOT NULL
)";
if ($conn->query($sql) === false) {
    die("Erro ao criar a tabela: " . $conn->error);
}

echo "Banco de dados e tabela criados com sucesso!";

// Fecha a conexão com o banco de dados
$conn->close();

?>