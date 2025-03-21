// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo de advinhar';

// let subtitulo= document.querySelector('p');
// subtitulo.innerHTML = 'Escolha um número de 1 a 100';
exibirTextoNaTela('h1','Jogo de advinhação');
exibirTextoNaTela('p' ,'Escolha um número entre 1 e 100');

function gerarNumeroAleatorio() {
   return parseint(Match.random()* 100) + 1;
}
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto)

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    let chute = parseint(document.querySelector('imput').value);
    console.log(chute === numeroSecreto);
}

