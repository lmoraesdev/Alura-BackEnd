const cliente = {
	nome: "Joao",
	idade: 24,
	email: "joao@firma.com",
	telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
	{
		rua: "R. Joseph Climber",
		numero: 1337,
		aparamento: true,
		complemento: "ap 934",
	},
];

cliente.enderecos.push({
	rua: "R. Joseph Ladder",
	numero: 404,
	aparamento: false,
});

const listaApenasAparmentos = cliente.enderecos.filter(
	(endereco) => endereco.aparamento === true
);

console.log(listaApenasAparmentos);
