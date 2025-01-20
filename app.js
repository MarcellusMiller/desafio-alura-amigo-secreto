//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
let input = document.getElementById('amigo');
let listaVisual = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado')


function adicionarAmigo() {
    if(input.value == '') {
        alert('O campo não pode estar vazio');
    } else {
        listaAmigos.push(input.value);
        console.log(listaAmigos)
        atualizarAmigos()
    }
}

function atualizarAmigos() {
    listaVisual.innerText = '';
    for(let i = 0; i < listaAmigos.length; i++) {
        const el = document.createElement('li');
        el.appendChild(document.createTextNode(listaAmigos[i]));
        listaVisual.appendChild(el);
    }
}

function sortearAmigo() {
    resultado.innerText = '';
    let sorteado = sortearNumero();
    let liResultado = document.createElement('li');
    liResultado.appendChild(document.createTextNode(listaAmigos[sorteado]));
    resultado.appendChild(liResultado)
}

function sortearNumero() {
    let max = listaAmigos.length;
    let aleatorio = Math.floor(Math.random() * max);
    let valoresJaSorteados = [];

        if(valoresJaSorteados.length == max) {
            valoresJaSorteados = [];
        }

        if(valoresJaSorteados.includes(aleatorio)) {
            return sortearNumero;
        } else {
            valoresJaSorteados.push(aleatorio);
            return aleatorio;    
        }
}