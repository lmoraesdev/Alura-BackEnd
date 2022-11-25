export default class User {
	_nome;
	_email;
	_nascimento;
	_role;
	_ativo;
	constructor(nome, email, nascimento, role, ativo = true) {
		this._nome = nome;
		this._email = email;
		this._nascimento = nascimento;
		this._role = role || "estudante";
		this._ativo = ativo;
	}
	get nome() {
		return this._nome;
	}
	get email() {
		return this._email;
	}
	get nascimento() {
		return this._nascimento;
	}
	get role() {
		return this._role;
	}
	get ativo() {
		return this._ativo;
	}

	set nome(novoNome){
		if (novoNome === ''){
			throw new Error('Formato não válidaD')
		}
		this._nome = novoNome
	}

	_montaObjUser() {
		return {
			name: this._nome,
			email: this._email,
			Nascimento: this._nascimento,
			role: this._role,
			ativo: this._ativo,
		};
	}

	exibirInfos() {
		const objUser = this._montaObjUser();
		return `${objUser.nome}, ${objUser.email},${objUser.nascimento},${objUser.role},${objUser.ativo}`;
	}
}
