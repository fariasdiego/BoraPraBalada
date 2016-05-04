function Balada(nome, estilo,  mapa) {
	this.nome = nome;
	this.estilo = estilo;
	this.mapa = mapa;
	this.foto = 'img/' + this.estilo + '/' + this.nome.toLowerCase().replace(/\s/g,'') + '/foto.jpg';
	/*var logo = this.logo; implementar!*/
}

var eletronica = [
	new Balada(
	'Vibe',
	'eletronica',
	'https://goo.gl/EDnWiP'),
	new Balada(
	'Danghai',
	'eletronica',
	'https://goo.gl/EDnWiP'),
	new Balada(
	'Duc',
	'eletronica',
	'https://goo.gl/EDnWiP')
];

var rock = [
	new Balada(
	'Crossroads',
	'rock',
	'https://goo.gl/EDnWiP'),
	new Balada(
	'Blood',
	'rock',
	'https://goo.gl/EDnWiP'),
	new Balada(
	'Sheridans',
	'rock',
	'https://goo.gl/EDnWiP')
];

var sertanejo = [
	new Balada(
	'Woods',
	'sertanejo',
	'https://goo.gl/EDnWiP'),
	new Balada(
	'Shed',
	'sertanejo',
	'https://goo.gl/EDnWiP'),
	new Balada(
	'Victoria Villa',
	'sertanejo',
	'https://goo.gl/EDnWiP')
];