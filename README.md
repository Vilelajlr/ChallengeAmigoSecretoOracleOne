# Challenge Amigo Secreto Oracle One + Alura

#### Para rodar o projeto basta apenas fazer o dowload do codigo pelo GitHub e iniciar.

## Primeiro e criado uma variavel para armazenar os amigos 
```
    let amigos = [];
```

## Funcoes principais
### Adicionar Amigo - responsavel por adicionar os amigos selecionados que irao participar do sorteio.
```
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
```

### Sortear Amigos - responsavel por sortear os amigos que ja foram adicionados anteriormente.
```
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
```