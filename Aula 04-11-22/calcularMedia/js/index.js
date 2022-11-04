"use strict";

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const btnCalcular = document.getElementById("btnCalcular");
const saida = document.getElementById("saida");

//parseFloat(Vaariavel.value) OU Number(Variavel.value) OU (+)Variavel.value

function getP1(){
    return +p1.value;
};
function getP2(){
    return +p2.value;
};
function calcularMedia(p1,p2) {
        let media = (p1+2*p2)/3;
        return media.toFixed(2);
};
function ValidaNotas(){
        saida.textContent = calcularMedia(getP1(),getP2());
};

btnCalcular.addEventListener("click", ValidaNotas);