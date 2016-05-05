function mostraImagens(estilo) {
	var estrutura = '';
			for (indice in estilo) { 
				estrutura += 
		            '<li>'+
		            	'<figure>'+
		                	'<div><img class="img-responsive" src="' + estilo[indice].icone + '" alt=""><div>'+
		                	'<figcaption class="informacoes">'+
		                		'<img src="' + estilo[indice].logo + '" alt="' + estilo[indice].nome + '">'+
		                		'<a type="button" class="btn btn-default botao" role="button" href="' + estilo[indice].programacao + '" target="_blank">Programação</a>'+
		                		'<div class="btn-group" role="group">'+
									'<a type="button" class="btn btn-default" role="button" href="' + estilo[indice].foto + '" target="_blank">Foto</a>'+
									'<a type="button" class="btn btn-default" role="button" href="' + estilo[indice].mapa + '" target="_blank">Mapa</a>'+
								'</div>'+
		                	'</figcaption>'+
		                '</figure>'+
		            '</li>';
			}
	return document.write(estrutura);
}