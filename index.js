let visor = document.getElementById("visor");

let btnNumeros = document.getElementsByClassName("casa");

for(btn of btnNumeros) {
    btn.addEventListener("click", clique_numero);
}

function clique_numero(event) {
    visor.innerHTML = visor.innerHTML + event.target.innerHTML;
}
    