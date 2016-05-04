function mostraImagens(estilo) {
	var estrutura = '';
		for (indice in estilo) { 
			estrutura += 
				'<div class="col-lg-4 col-md-6 col-xs-12">'+
	                '<a class="thumbnail" href="#">'+
	                    '<img class="img-responsive" src="' + estilo[indice].foto + '" alt="">'+
	                '</a>'+
		        '</div>';
		}
	return estrutura;
}
