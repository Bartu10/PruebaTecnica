<?php

// Configuración BD
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "bd_formulario";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Recibir datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$asunto = $_POST['asunto'];
$comentarios = $_POST['comentarios'];



$sql = "INSERT INTO usuario (nombre, email, telefono, asunto, comentarios) VALUES ('$nombre', '$email', '$telefono', '$asunto', '$comentarios')";

if ($conn->query($sql) === TRUE) {
    echo "Datos insertados correctamente";
} else {
    echo "Error al insertar datos: " . $conn->error;
}

// Cerrar la conexión
$conn->close();


?>
