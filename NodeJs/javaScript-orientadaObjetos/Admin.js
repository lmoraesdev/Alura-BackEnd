import User from "./User.js";

class Admin extends User {
	constructor(name, email, nascimento, role = 'admin', ativo = true){
		super(name, email, nascimento, role, ativo);
	}
	criarCurso(nomeDoCurso, vagas ){
		return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
	}
}

const novoAdmin = new Admin ('Rodrigo', 'r@r.com', '2021-01-01')

console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())
