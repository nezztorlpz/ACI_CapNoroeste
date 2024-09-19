document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    toggleBtn.onclick = function() {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');

        // Cambia la clase del ícono dependiendo del estado del menú
        toggleBtnIcon.classList = isOpen
            ? 'bi bi-x'  // Clase del ícono 'x' de Bootstrap Icons cuando el menú está abierto
            : 'bi bi-list'; // Clase del ícono de hamburguesa cuando está cerrado
    }
});
