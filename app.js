//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];



const adicionarAmigo = () => {

    let inputNameFriend = document.getElementById("amigo").value;
    
    if(inputNameFriend === ""){
        alert('Por favor, insira um nome.');
    }else {
        amigos.push(inputNameFriend);
        document.getElementById('amigo').value = '';
        
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';

        for(let i = 0; i < amigos.length; i++){
            let li = document.createElement('li');
            li.textContent = amigos[i];
            lista.appendChild(li);
        }
    }

}


const sortearAmigo = () => {
    
    if (amigos.length === 0) {
        alert("Nenhum amigo na lista.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSelecionado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    let liResultado = document.createElement('li');
    liResultado.textContent = `O amigo sorteado foi: ${amigoSelecionado}`;
    resultado.appendChild(liResultado);


}

