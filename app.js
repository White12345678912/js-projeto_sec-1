// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo de advinhar';

// let subtitulo= document.querySelector('p');
// subtitulo.innerHTML = 'Escolha um número de 1 a 100';
exibirTextoNaTela('h1','Jogo de advinhação');
exibirTextoNaTela('p' ,'Escolha um número entre 1 e 100');

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    alert('apertou o botão');
}

