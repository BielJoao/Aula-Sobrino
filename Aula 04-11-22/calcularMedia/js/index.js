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
// return (nota>=0 && nota<=10) ? true : false;
function validarNota(nota){
        if (nota>= 0 && nota <=10){
            return true;
        } else{
            return false;
            }
}
function onclick(){
        saida.textContent = calcularMedia(getP1(),getP2());
};
function onChange() {
    if(validarNota(this.value)== false){
        this.value="";
        this.focus();
    }
    
    
    //saida.textContent = validarNota(this.value);
}
btnCalcular.addEventListener("click", onclick);

p1.addEventListener("change", onChange);
p2.addEventListener("change", onChange);