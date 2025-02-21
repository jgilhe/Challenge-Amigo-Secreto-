
let Nombres = [];

function agregarAmigo() {
    let NombredeAmigo = document.getElementById('amigo').value.trim();
    if (NombredeAmigo === '') {
        alert('Por favor digite un nombre válido');
        return;
    }
    
    Nombres.push(NombredeAmigo);
    actualizarLista();
    limpiarCampo();
}

function limpiarCampo() {
    document.getElementById('amigo').value = '';
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    Nombres.forEach((nombre, index) => {
        let item = document.createElement('li');
        item.textContent = nombre;
        
        lista.appendChild(item);
    });
}

function eliminarAmigo(index) {
    Nombres.splice(index, 1);
    actualizarLista();
}

function sortearAmigo() {
    if (Nombres.length === 0) {
        alert('Agrega al menos un nombre antes de sortear');
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * Nombres.length);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${Nombres[indiceSorteado]}</strong> </li>`;
}
