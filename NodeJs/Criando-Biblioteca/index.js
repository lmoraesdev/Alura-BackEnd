import fs from "fs";
import chalk from "chalk";

function trataErro(erro) {
	throw new Error(chalk.red(erro.code, "não há arquivo no diretorio"));
}

async function pegaArquivo(caminhoDoArquivo) {
	try {
		const encoding = "utf-8";
		const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
		console.log(extraiLinks(texto));
	} catch (erro) {
		trataErro(erro);
	}
}

function extraiLinks(texto) {
	const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
	const capturas = [...texto.matchAll(regex)];
	const resultados = capturas.map((captura) => ({
		[captura[1]]: captura[2],
	}));
	return resultados;
}

pegaArquivo("./arquivos/texto.md");
