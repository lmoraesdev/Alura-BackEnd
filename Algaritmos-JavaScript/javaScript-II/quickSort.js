const listaLivros = require("./listaLivros");
const trocaLugar = require("./encontraMenores");

function quickSort(array, esquerda, direita) {
	if (array.length > 1) {
		let indiceAtual = particiona(array, esquerda, direita);
		if (esquerda < indiceAtual - 1) {
			quickSort(array, esquerda, indiceAtual - 1);
		}
		if (indiceAtual < direita){
			quickSort(array, indiceAtual, direita)
		}
	}

	return array;
}

function particiona(array, esquerda, direita) {
	let pivo = array[Math.floor((esquerda + direita) / 2)];
	let atualEsquerda = esquerda;
	let atualDireito = direita;

	while (atualEsquerda <= atualDireito) {
		while (array[atualEsquerda].preco < pivo.preco) {
			atualEsquerda++;
		}

		while (array[atualDireito].preco > pivo.preco) {
			atualDireito--;
		}

		if (atualEsquerda <= atualDireito) {
			trocaLugar(array, atualEsquerda, atualDireito);
			atualEsquerda++;
			atualDireito--;
		}
	}
	return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));
