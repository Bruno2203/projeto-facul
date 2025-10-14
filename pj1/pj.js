const menos = document.getElementById('menos');
const mais = document.getElementById('mais');
const span_numero = document.getElementById('span');

var contador = 1;

span_numero.textContent = contador; 

menos.addEventListener('click', function() {
    contador--;
    span_numero.textContent = contador;
    if (contador <= 0) {
        menos.disabled = true;
    }
});

mais.addEventListener('click', function() {
    contador++;
    span_numero.textContent = contador;
    if (contador >= 1) {
        menos.disabled = false;
    }
})
/*---------------------------------------------------------------------------------------------*/



