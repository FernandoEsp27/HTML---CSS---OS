function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString(); // Formatea la fecha y hora
    document.getElementById('datetime').textContent = dateTimeString;
}

// Actualiza la hora y fecha cada segundo
setInterval(updateDateTime, 1000);

// Llama a la función una vez para que la hora y fecha aparezcan inmediatamente
updateDateTime();
