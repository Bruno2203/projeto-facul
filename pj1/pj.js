const menos = document.getElementById('menos');
const mais = document.getElementById('mais');
const span_numero = document.getElementById('span');

let contador = 0;

span_numero.textContent = contador; 

mais.addEventListener('click', function() {
    contador++;
    span_numero.textContent = contador;
})

if(contador <= 0){
    menos.disabled = true;    
}

else if(contador != 0){
    menos.disabled = false;
}

menos.addEventListener('click', function() {
    contador--;
    span_numero.textContent = contador;
})
