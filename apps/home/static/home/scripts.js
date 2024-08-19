function updateDate() {
    const dateElement = document.getElementById('date');
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const currentDate = new Date().toLocaleDateString('es-ES', options);
    dateElement.textContent = currentDate;
}

// Actualiza la fecha al cargar la página
updateDate();

// Actualiza la fecha cada segundo
setInterval(updateDate, 1000);
