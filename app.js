//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    if (!nome) {
        alert("Por favor, insira um nome válido");
        return;
    }
    if (!amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        input.value = "";
    }
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear!");
        return;
    }

    let sorteio = {};
    let participantes = [...amigos];
    let sorteados = [...amigos];

    for (let participante of participantes) {
        let possiveis = sorteados.filter(p => p !== participante);
        if (possiveis.length === 0) {
            return sortearAmigo(); // Reinicia o sorteio se não houver opções
        }
        let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)];
        sorteio[participante] = sorteado;
        sorteados = sorteados.filter(p => p !== sorteado);
    }

    exibirResultado(sorteio);
}

function exibirResultado(sorteio) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    for (let [amigo, sorteado] of Object.entries(sorteio)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${sorteado}`;
        resultado.appendChild(li);
    }
}