const checkboxes = document.querySelectorAll('.materia');
const horasCubiertasElem = document.getElementById('horas-cubiertas');
const horasFaltantesElem = document.getElementById('horas-faltantes');
const horasMinimas = 20;

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', calcularHoras);
});

function calcularHoras() {
    let horasCubiertas = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            horasCubiertas += parseInt(checkbox.getAttribute('data-horas'));
        }
    });

    horasCubiertasElem.textContent = horasCubiertas;
    horasFaltantesElem.textContent = horasMinimas - horasCubiertas;
}
