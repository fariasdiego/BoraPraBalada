function Balada(nome, estilo, mapa, site, bonusMaximo) {
	this.nome = nome;
	this.estilo = estilo;
	this.mapa = mapa;
	this.site = site;
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
	'https://www.google.com.br/',
	10),
	new Balada(
	'Danghai',
	'eletronica',
	'https://goo.gl/maps/JUHJcCp6gYS2',
	'https://www.google.com.br/',
	15),
	new Balada(
	'Duc',
	'eletronica',
	'https://goo.gl/maps/DaZQuUtQRyG2',
	'https://www.google.com.br/',
	5)
];

var rock = [
	new Balada(
	'Crossroads',
	'rock',
	'https://goo.gl/maps/dvuaoPo2TX62',
	'https://www.google.com.br/',
	20),
	new Balada(
	'Blood',
	'rock',
	'https://goo.gl/maps/k8AYQvMYawQ2',
	'https://www.google.com.br/',
	3),
	new Balada(
	'Sheridans',
	'rock',
	'https://goo.gl/maps/9MoTuqP2aF22',
	'https://www.google.com.br/',
	8)
];

var sertanejo = [
	new Balada(
	'Woods',
	'sertanejo',
	'https://goo.gl/maps/eQYcn4vkG2s',
	'https://google.com.br',
	15),
	new Balada(
	'Shed',
	'sertanejo',
	'https://goo.gl/maps/ZLopQZgQLiD2',
	'https://google.com.br',
	14),
	new Balada(
	'Victoria Villa',
	'sertanejo',
	'https://goo.gl/maps/2UawmFQaLTN2',
	'https://google.com.br',
	10),
	new Balada(
	'Rodeo',
	'sertanejo',
	'https://goo.gl/maps/vMU48aT38642',
	'https://google.com.br',
	10),
	new Balada(
	'Holdem',
	'sertanejo',
	'https://goo.gl/maps/SZNvYPN578R2',
	'https://google.com.br',
	9),
	new Balada(
	'Territorio Sertanejo',
	'sertanejo',
	'https://goo.gl/maps/iau8tSxmdtt',
	'https://google.com.br',
	8),
	new Balada(
	'Emporio Sao Francisco',
	'sertanejo',
	'https://goo.gl/maps/9QfqmVgEeQN2',
	'https://google.com.br',
	7),
	new Balada(
	'Selfie Brasil',
	'sertanejo',
	'https://goo.gl/maps/58uW1uuxj9z',
	'https://google.com.br',
	7),
	new Balada(
	'Santa Marta',
	'sertanejo',
	'https://goo.gl/maps/Dz3c3pUFC5D2',
	'https://google.com.br',
	7)
];

var todos = eletronica.concat(rock, sertanejo);