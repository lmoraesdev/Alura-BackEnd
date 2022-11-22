const user = {
	nome: "Leandro",
	email: "leandro@email.com",
	nascimento: "2021/01/11",
	role: "estudante",
	ativo: true,
	exibirInfos: function () {
		console.log(this.nome, this.email);
	},
};

const admin = {
	nome: "Mariana",
	email: "m@m.com",
	role: "admin",
	criarCurso() {
		console.log("curso criado!");
	},
};

Object.setPrototypeOf(admin, user);
