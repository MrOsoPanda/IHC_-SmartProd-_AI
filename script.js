function enviarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional
    // Mostrar el mensaje de confirmación
    alert("El mensaje se ha enviado correctamente");
    // Opcional: Reiniciar el formulario después de enviar
    document.getElementById("contactForm").reset();
}
