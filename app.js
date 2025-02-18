//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let novoAmigo = document.querySelector('input').value;
    amigos.push(novoAmigo);
    console.log(amigos);
    
    
    if (novoAmigo == ''){
        alert('Por favor,insira um nome válido.');
    }


}
