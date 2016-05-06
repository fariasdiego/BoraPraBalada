function Balada(nome, estilo, mapa, programacao, bonusMaximo) {
	this.nome = nome;
	this.estilo = estilo;
	this.mapa = mapa;
	this.programacao = programacao;
	this.bonusMaximo = bonusMaximo;
	this.foto = 'img/' + this.estilo + '/' + this.nome.toLowerCase().replace(/\s/g,'') + '/foto.jpg';
	this.logo = 'img/' + this.estilo + '/' + this.nome.toLowerCase().replace(/\s/g,'') + '/logo.jpg';
	this.icone = 'img/' + this.estilo + '/icone.jpg';
}

var eletronica = [
	new Balada(
	'Vibe',
	'eletronica',
	'https://goo.gl/maps/6ioNaU33YnM2',
	'Noite da Tequila 01/06/2016',
	10),
	new Balada(
	'Danghai',
	'eletronica',
	'https://goo.gl/maps/JUHJcCp6gYS2',
	'Noite da balalaika 01/06/2016',
	15),
	new Balada(
	'Duc',
	'eletronica',
	'https://goo.gl/maps/DaZQuUtQRyG2',
	'Noite da Tequila 01/06/2016',
	5)
];

var rock = [
	new Balada(
	'Crossroads',
	'rock',
	'https://goo.gl/maps/dvuaoPo2TX62',
	'Noite da Tequila 01/06/2016',
	20),
	new Balada(
	'Blood',
	'rock',
	'https://goo.gl/maps/k8AYQvMYawQ2',
	'Noite da Tequila 01/06/2016',
	3),
	new Balada(
	'Sheridans',
	'rock',
	'https://goo.gl/maps/9MoTuqP2aF22',
	'Noite da Tequila 01/06/2016',
	8)
];

var sertanejo = [
	new Balada(
	'Woods',
	'sertanejo',
	'https://goo.gl/maps/eQYcn4vkG2s',
	'Noite da Tequila 01/06/2016',
	10),
	new Balada(
	'Shed',
	'sertanejo',
	'https://goo.gl/maps/ZLopQZgQLiD2',
	'Noite da Tequila 01/06/2016',
	12),
	new Balada(
	'Victoria Villa',
	'sertanejo',
	'https://goo.gl/maps/2UawmFQaLTN2',
	'Noite da Tequila 01/06/2016',
	6)
];

var todos = eletronica.concat(rock, sertanejo);