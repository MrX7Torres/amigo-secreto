// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function limpiarCaja() {
    document.querySelector('amigo').value = '';
}

function agregarAmigo() {
    let nombrePorUsuario = getElementById('amigo').value;
    if (nombrePorUsuario == ''){
        alert("Por favor, inserte un nombre.");
        return agregarAmigo();
    } else {
        amigos.push(nombrePorUsuario);
        return nombrePorUsuario;
    }
    limpiarCaja();
}

