let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listaAmigos = document.getElementById("listaAmigos");

  
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

 
    amigos.push(nombre);

   
    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);

  
    input.value = "";
}


function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 participantes para el sorteo.");
        return;
    }

    
    const indiceGanador = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceGanador];

    
    resultado.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoSecreto}</strong>! 🎉</li>`;
}
