let amigos = [];

function adicionarAmigo() {
    let novoAmigo = document.querySelector('input').value;

    if(novoAmigo == ''){
        alert('Por favor, insira um nome válido.'); //poderia ter sido encorporado ao texto acima do campo. além de uma validação de não ser adicionado número.
    } else {
        amigos.push(novoAmigo);
    }

    console.log(amigos);
    
    limpaCampo(); // no início, pensei que poderia jogar o código dela dentro da função, mas não é legal repetir código.
    alteraTexto('insira o nome do próximo amigo.'); //não era obrigatório no projeto, mas fiz mesmo assim ^^
}

function limpaCampo(){
    let limpa = document.querySelector('input');
    limpa.value = '';
}

function alteraTexto(texto){
    let mensagem = document.querySelector('h2');
    mensagem.innerHTML = texto;
}