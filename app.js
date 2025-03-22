// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo de adivinhação';

// let subtitulo = document.querySelector('p');
// subtitulo.innerHTML = 'Escolha um número entre 1 e 100';
let tentativas = 2;

exibirTextoNaTela('h1', 'Jogo de adivinhação');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10) + 1;
}

let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    if (chute === 0) {
        exibirTextoNaTela('h1', 'suas tentativas acabaram!')
    } else {
        tentativas--;
        if (chute === numeroSecreto) {
            exibirTextoNaTela('h1', `parabéns! Você acertou! ${numeroSecreto}.`);
        } else if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', `Errou! O número secreto é menor. Você ainda tem ${tentativa} ${palavraTentativa}.`);
        } else {
            exibirTextoNaTela('h1', `Errou! O número secreto é maior. Você ainda tem ${tentativa} ${tentativas}.`);
        }
    }
}

//<h1>Jogo de adivinhação</h1>
//<p>Escolha um número entre 1 e 100</p>