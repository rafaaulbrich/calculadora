let visor = document.getElementById("visor");
let btnNumeros = document.getElementsByClassName("numero");
let btnC = document.getElementById("sinalC");
let btnOperadores = document.getElementsByClassName("operador");
let btnVirgula = document.getElementsByClassName("virgula")[0];
let btnRaizQuadr = document.getElementsByClassName("raiz")[0];
let valor_salvo = null;
let operacao_salva = null;
let btnIgual = document.getElementsByClassName("igual")[0];
let body = document.getElementsByTagName("body")[0];

for(let botao of btnNumeros) {
    botao.addEventListener("click", clique_numero);
}

btnC.addEventListener("click", limpa_visor);
for(let botao of btnOperadores) {
    botao.addEventListener("click", clique_operador);
}

btnIgual.addEventListener("click", clique_igual);
btnVirgula.addEventListener("click", clique_virgula);
btnRaizQuadr.addEventListener("click", clique_operadorRaizQuadr);
body.addEventListener("keydown", pressionou_tecla);

function pressionou_tecla(event) {
    if(event.key === "+") {
        document.getElementById('sinalAdi').click();
    } else if(event.key === "-") {
        document.getElementById('sinalSub').click();
    } else if(event.key === "*") {
        document.getElementById('sinalMult').click();
    } else if(event.key === "/") {
        document.getElementById('sinalDivi').click();
    } else if(event.key === "%"){
        document.getElementById('sinalPorcent').click();
    } else if(event.key === "0") {
        document.getElementById('numero0').click();
    } else if(event.key === "1") {
        document.getElementById('numero1').click();
    } else if(event.key === "2") {
        document.getElementById('numero2').click();
    } else if(event.key === "3") {
        document.getElementById('numero3').click();
    } else if(event.key === "4") {
        document.getElementById('numero4').click();
    } else if(event.key === "5") {
        document.getElementById('numero5').click();
    } else if(event.key === "6") {
        document.getElementById('numero6').click();
    } else if(event.key === "7") {
        document.getElementById('numero7').click();
    } else if(event.key === "8") {
        document.getElementById('numero8').click();
    } else if(event.key === "9") {
        document.getElementById('numero9').click();
    } else if(event.key === ',') {
        document.getElementById('sinalVirg').click();
    } else if(event.key === "Escape") {
        document.getElementById('sinalC').click();
    } else if(event.key === "Enter") {
        document.getElementById('sinalIgual').click();
    } else if(event.key === 'z' || event.key === 'Z') {
        document.getElementById('sinalRaiz').click();
    } 
}

function clique_virgula(event) {
    if(isNaN(visor.innerHTML) === true) {
        visor.innerHTML = ".";
    } else if(isNaN(visor.innerHTML + ".") === false){
        visor.innerHTML = visor.innerHTML + ".";
    }
}

function clique_igual(event) {
    if(valor_salvo != null && operacao_salva != null && !isNaN(visor.innerHTML)) {
        visor.innerHTML = calcula_operacao(valor_salvo, operacao_salva, Number(visor.innerHTML)).toFixed(9);
        valor_salvo = null;
        operacao_salva = null;
    }
}

function clique_numero(event) {

    if(isNaN(visor.innerHTML)) {
        visor.innerHTML = event.target.innerHTML;
    } else {
        visor.innerHTML = Number(visor.innerHTML + event.target.innerHTML);
    }
}

function limpa_visor(event) {
    visor.innerHTML = "";
}

function clique_operador(event) {

    if(!isNaN(visor.innerHTML)) {
        if(valor_salvo === null) {
            valor_salvo = Number(visor.innerHTML);
        } else{
            valor_salvo = calcula_operacao(valor_salvo, operacao_salva, Number(visor.innerHTML));
        }
    }
    operacao_salva = event.target.innerHTML;
    visor.innerHTML = event.target.innerHTML;
}

function clique_operadorRaizQuadr(event) {
    if(!isNaN(visor.innerHTML)) {
        visor.innerHTML = Math.sqrt(Number(visor.innerHTML));
    }
}

function calcula_operacao(valor1, operacao, valor2) {
    if(operacao === "+" ){
        return valor1 + valor2;
    } else if(operacao === "-"){
        return valor1 - valor2;
    } else if(operacao === "x") {
        return valor1 * valor2;
    } else if(operacao === "÷") {
        return valor1 / valor2;
    } else if(operacao === "%") { 
        return valor1 * (valor2 / 100);
    } else {
        return null;
    }
}


    