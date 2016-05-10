/*Gera um número randômico de 0 a max-1. Utilizado gerar um índice randômico de uma lista, que começa em 0*/
function numeroRandomico(max) {
	return Math.floor(Math.random() * max)
}

/*Verifica se um valor consta em uma lista*/
function naoConsta(valor, lista) {
	if (lista.indexOf(valor) == -1) {
		return true
	} else {
		return false;
	}
}

function randomizaLista(lista) {
	var listaRandomizada = [];
	var valorAleatorio = '';

	while(listaRandomizada.length < lista.length) {
		valorAleatorio = lista[numeroRandomico(lista.length)];

		if (naoConsta(valorAleatorio, listaRandomizada)) {
			listaRandomizada.push(valorAleatorio);
		} else {
			continue;
		}
	}
	return listaRandomizada;
}

function calculaBonus(balada) {
	var bonus;
	var posicao = parseInt(indice) + 1;
	switch(posicao) {
	    case 1:
	        bonus = balada[indice].bonusMaximo;
	        break;
	    case 2:
	        bonus = balada[indice].bonusMaximo * 0.8;
	        break;
       	case 3:
	        bonus = balada[indice].bonusMaximo * 0.6;
	        break;
	    default:
	        bonus = balada[indice].bonusMaximo * 0.5;
	}
	return bonus;
}

function mostraBonus(bonus) {
	alert('Parabéns, você recebeu ' + bonus + '% de desconto!');
}

function mostraGaleria(estilo) {
	estilo = randomizaLista(estilo);
	var estrutura = '';
	var bonus;
			for (indice in estilo) {
				bonus = calculaBonus(estilo);
				estrutura += 
		            '<li>'+
		            	'<figure>'+
		                	'<img class="img-responsive icone" src="' + estilo[indice].icone + '" alt="">'+
		                	'<figcaption>'+
		                		'<div class="logo"><img src="' + estilo[indice].logo + '" alt="' + estilo[indice].nome + '"></div>'+
		                		'<div class="btn-group" role="group">'+
		                			'<a type="button" class="btn btn-default" role="button" href="' + estilo[indice].site + '" target="_blank">Site</a>'+
									'<a type="button" class="btn btn-default" role="button" href="' + estilo[indice].mapa + '" target="_blank">Mapa</a>'+
									'<a type="button" class="btn btn-default" role="button" href="#" onClick="mostraBonus(' + bonus + ')">Bônus</a>'+
								'</div>'+
		                	'</figcaption>'+
		                '</figure>'+
		            '</li>';
			}
	return document.write(estrutura);
}

$(function(){   
	var nav = $('#menu');   
	var logo = $('#banner');
	$(window).scroll(function () { 
		if ($(this).scrollTop() > (logo.height() + nav.height())) { 
			nav.addClass("navbar-fixed-top"); 
		} else { 
			nav.removeClass("navbar-fixed-top"); 
		} 
	});  
});