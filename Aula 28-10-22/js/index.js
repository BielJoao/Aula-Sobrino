const nome = document.getElementById("nome");
const btnSaudar = document.getElementById("btnSaudar");
const saida = document.getElementById("saida");

function saudarUsuario(){
    saida.textContent = "Oi," + nome.value + "!";
}

btnSaudar.addEventListener("click", saudarUsuario);

//btnSaudar.onclick = function(){
//   saida.textContent ="Oi, " + nome.value + "!";
//}

//document.getElementById("saida").textContent = "Oi!";