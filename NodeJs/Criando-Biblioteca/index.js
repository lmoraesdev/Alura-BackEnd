import fs from "fs";
import chalk from "chalk";

function trataErro(erro) {
	throw new Error(chalk.red(erro.code, "não há arquivo no diretorio"));
}

async function pegaArquivo(caminhoDoArquivo){
	try {
		const encoding =  'utf-8';
		const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
		console.log(chalk.green(texto));
	} catch (erro){
		trataErro(erro)
	}
}

pegaArquivo("./arquivos/texto.md");

// \[[^[\]]*?\]
