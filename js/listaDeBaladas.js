function Balada(nome, estilo, mapa, site, bonusMaximo) {
	this.nome = nome;
	this.estilo = estilo;
	this.mapa = mapa;
	this.site = site;
	this.bonusMaximo = bonusMaximo;
	this.nomeLimpo = minusculoSemEspacoAcento(this.nome);
	this.foto = 'img/' + this.estilo + '/' + this.nomeLimpo + '/foto.jpg';
	this.logo = 'img/' + this.estilo + '/' + this.nomeLimpo + '/logo.jpg';
	this.icone = 'img/' + this.estilo + '/icone.jpg';
}

var eletronica = [
	new Balada(
	'Vibe',
	'eletronica',
	'https://goo.gl/maps/6ioNaU33YnM2',
	'https://www.facebook.com/ClubVibeOfficial/',
	10),
	new Balada(
	'Danghai',
	'eletronica',
	'https://goo.gl/maps/JUHJcCp6gYS2',
	'http://www.danghai.com.br/',
	15),
	new Balada(
	'Duc',
	'eletronica',
	'https://goo.gl/maps/DaZQuUtQRyG2',
	'https://www.facebook.com/pages/Duc-Club/271321792918363',
	5),
	new Balada(
	'James',
	'eletronica',
	'https://goo.gl/maps/SdNk3wmBZbz',
	'http://barjames.com.br/site/',
	50),
	new Balada(
	'Bar do Simão',
	'eletronica',
	'https://goo.gl/maps/48eaMmzJ5As',
	'https://www.facebook.com/BarSimao',
	35),
	new Balada(
	'VU Bar',
	'eletronica',
	'https://goo.gl/maps/jMNtXRrm1i22',
	'https://www.facebook.com/V.U.Bar',
	20),
	new Balada(
	'Wonka',
	'eletronica',
	'https://goo.gl/maps/JMBzACPF8e12',
	'https://www.facebook.com/Wonka-Bar-Curitiba-PR-75717456590',
	60),
	new Balada(
	'Soviet',
	'eletronica',
	'https://goo.gl/maps/ANqLwR54w4E2',
	'http://www.soviet.com.br/',
	12),
	new Balada(
	'Vox',
	'eletronica',
	'https://goo.gl/maps/ANqLwR54w4E2',
	'http://www.voxbar.com.br/',
	15)

];

var rock = [
	new Balada(
	'Crossroads',
	'rock',
	'https://goo.gl/maps/dvuaoPo2TX62',
	'http://www.crossroads.com.br/',
	20),
	new Balada(
	'Blood',
	'rock',
	'https://goo.gl/maps/k8AYQvMYawQ2',
	'http://www.bloodrockbar.com.br/',
	3),
	new Balada(
	'Sheridans',
	'rock',
	'https://goo.gl/maps/9MoTuqP2aF22',
	'http://www.sheridansirishpub.com.br/',
	20),
	new Balada(
	'Sebas',
	'rock',
	'https://goo.gl/maps/d34GTwWHob62',
	'http://www.sebasrockbar.com.br/',
	5),
	new Balada(
	'Peppers',
	'rock',
	'https://goo.gl/maps/zbd2f9RAoU22',
	'https://www.facebook.com/pepperscuritiba',
	9),
	new Balada(
	'Phoenix American Mex',
	'rock',
	'https://goo.gl/maps/7TQgmSBBVw52',
	'http://www.phoenixamericanmex.com.br/',
	3),
	new Balada(
	'Sláinte',
	'rock',
	'https://goo.gl/maps/jDfMcyTnwk82',
	'https://www.facebook.com/slainteirishexperience/',
	15),
	new Balada(
	'Txapela',
	'rock',
	'https://goo.gl/maps/mZKRREsHioD2',
	'http://www.txapela.com.br/',
	20),
	new Balada(
	'Empório São Francisco',
	'rock',
	'https://goo.gl/maps/9QfqmVgEeQN2',
	'http://www.emporiosaofrancisco.com.br/',
	7),
	new Balada(
	'Hard Rock Café',
	'rock',
	'https://goo.gl/maps/6cotcin8ofs',
	'http://www.hardrock.com/cafes/curitiba/pt/',
	12)
];

var sertanejo = [
	new Balada(
	'Woods',
	'sertanejo',
	'https://goo.gl/maps/eQYcn4vkG2s',
	'http://www.woodsbar.com.br/curitiba',
	15),
	new Balada(
	'Shed',
	'sertanejo',
	'https://goo.gl/maps/ZLopQZgQLiD2',
	'http://www.shedbar.com.br/curitiba/',
	14),
	new Balada(
	'Victoria Villa',
	'sertanejo',
	'https://goo.gl/maps/2UawmFQaLTN2',
	'http://www.victoriacwb.com.br/',
	10),
	new Balada(
	'Rodeo',
	'sertanejo',
	'https://goo.gl/maps/vMU48aT38642',
	'http://www.rodeocountrybar.com.br/',
	10),
	new Balada(
	'Holdem',
	'sertanejo',
	'https://goo.gl/maps/SZNvYPN578R2',
	'https://www.facebook.com/pages/Hold-em-Country-Bar-Batel-Curitiba-PR/172887472804345',
	9),
	new Balada(
	'Território Sertanejo',
	'sertanejo',
	'https://goo.gl/maps/iau8tSxmdtt',
	'https://www.facebook.com/BarTerritorioSertanejo/',
	8),
	new Balada(
	'Selfie Brasil',
	'sertanejo',
	'https://goo.gl/maps/58uW1uuxj9z',
	'http://selfiebrasilcwb.com.br/site/',
	7),
	new Balada(
	'Santa Marta',
	'sertanejo',
	'https://goo.gl/maps/Dz3c3pUFC5D2',
	'http://www.santamartabar.com.br/',
	7)
];

var todos = eletronica.concat(rock, sertanejo);