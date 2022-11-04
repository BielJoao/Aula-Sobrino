"use strict";

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const btnCalcular = document.getElementById("btnCalcular");
const saida = document.getElementById("saida");

//parseFloat(Vaariavel.value) OU Number(Variavel.value) OU +Variavel.value

function calcularMedia() {
        let media = (Number(p1.value)+2*Number(p2.value))/3;
        saida.textContent = media.toFixed(2);
}

btnCalcular.addEventListener("click", calcularMedia);