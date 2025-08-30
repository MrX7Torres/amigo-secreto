// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function agregarAmigo() {
    let nombrePorUsuario = document.getElementById('amigo').value;
    if (nombrePorUsuario == ''){
        alert("Por favor, inserte un nombre.");
    } else if (amigos.includes(nombrePorUsuario)){
        alert("Este nombre ya existe en la lista, inserte otro nombre.");
    } else {
        amigos.push(nombrePorUsuario);
    }
    limpiarCaja();
    mostrarAmigos();
}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        return;
    } else {
        let amigoAleatorio = amigos[Math.floor(Math.random()*amigos.length)];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = amigoAleatorio;
    }
}

