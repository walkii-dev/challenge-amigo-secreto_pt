let amigos = [];

function adicionarAmigo() {
    let novoAmigo = document.querySelector('input').value;

    if(novoAmigo == ''){
        alert('Por favor, insira um nome válido.'); //poderia ter sido encorporado ao texto acima do campo. além de uma validação de não ser adicionado número.
    } else {
        amigos.push(novoAmigo);
        amigosNaLista();
    }

    
    
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

function amigosNaLista() {

    let lista = document.getElementById('listaAmigos'); // pega a referencia na lista pelo id HTML

    lista.innerHTML = ''; //define como nada pra ela começar zerada

    for (let i = 0; i < amigos.length ; i++ ){ // uma forma de acessar cada elemento da lista 
        let li = document.createElement('li');  //li vai receber uma criação de  tag li
        li.textContent = amigos[i]; //como está dentro do laço for, ela vai fazer um ciclo, a cada ciclo, vai 'guardar' o nome escrito no Li
        lista.appendChild(li); //isso é uma referencia que está ligado a lista ordenada.

    }

}

function sortearAmigo(){

    if (amigos == ''){
        alert('Esta ação ainda não está disponível.'); //então desativa o botão.
    } else { 
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo secreto escolhido foi o ${amigos[geraIndiceAleatorio()]}`;
    }
}

function geraIndiceAleatorio(){
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    return indiceAleatorio;
}