/*Paradigma de programacion Mocular */

function asignarEventos(){
    let elBoton = document.getElementById('botonEspecial');
    elBoton.addEventListener('click', saludar);
}
    let elBotonSumar = document.getElementById('btnSumar');
    elBotonSumar.addEventListener('click',realizarSuma);



function saludar(){
    let elParrafo = document.getElementById('parrafoEspecial');
    elParrafo.innerHTML = "El propósito de JavaScript es manipular el DOM";
    elParrafo.style.backgroundColor = 'yellow';
    elParrafo.style.color = 'red';
    elParrafo.style.fontSize = '56px';
}

function realizarSuma(){
    let dato1 =document.getElementById('txtDato1').value;
    let dato1Numero = Number(dato1);
    let dato2 =document.getElementById('txtDato2').value;
    let dato2Numero = Number(dato2);
    let resultado = dato1Numero + dato2Numero;
    let elResultadoSuma = document.getElementById('resultadoSuma');
    elResultadoSuma.value = resultado;
}