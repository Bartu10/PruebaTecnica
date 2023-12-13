$(document).ready(function(){
    $("#formulario").submit(function(e){
        e.preventDefault();

        // Realizar comprobaciones de datos con JavaScript
        if (!validarDatos()) {
            alert("Por favor, complete todos los campos correctamente.");
            return;
        }

        // Obtener datos del formulario
        var formData = $("#formulario").serialize();

        // Enviar datos mediante AJAX
        $.ajax({
            type: "POST",
            url: "conexionBD.php",
            data: formData,
            success: function(response){
                alert(response);
            },
            error: function(error){
                console.log("Error al enviar datos: " + error);
            }
        });
    });

    function validarDatos() {
        // Realizar comprobaciones aquí
        var nombre = $("#nombre").val();
        var email = $("#email").val();
        var telefono = $("#telefono").val();
        var asunto = $("#asunto").val();
        var comentarios = $("#comentarios").val();
        var privacidad = $("#privacidad").is(":checked");

        if (nombre.trim() === "" || nombre.length < 3 || nombre.length > 45) {
            alert("Introduce un nombre válido");
            return false;
        }
        if (email.indexOf("@") === -1 || email.length < 6 || email.length > 45) {
            alert("Por favor, introduzca una dirección de correo electrónico válida.");
            return false;
        }
        if (telefono.length > 20) {
            alert("Por favor, introduzca un número de teléfono válido.");
            return false;
        }
        if (asunto.length > 45) {
            alert("Por favor, introduzca un asunto válido.");
            return false;
        }
        if (comentarios.length > 200 || comentarios.length < 10) {
            alert("Por favor, introduzca un mensaje válido.");
            return false;
        }
        if (!privacidad) {
            alert("Por favor, acepte la política de privacidad.");
            return false;
        }
    

        return true;
    }
});