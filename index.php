<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">

		<title>Bora pra Balada?</title>

		<!-- CSS Bootstrap -->
    	<link href="css/bootstrap.min.css" rel="stylesheet">
    	<link href="css/bootstrap-theme.min.css" rel="stylesheet">

    	<!-- Nosso Arquivo CSS -->
    	<link href="css/style.css" rel="stylesheet">

	</head>

	<body>
		<!-- Cabeçalho -->
		<header>

			<!-- Logo -->
			<div class="container logo">
				<img class="img-responsive" src="img/logo.png">
			</div><!-- Fim da Logo -->

			<!-- Implementar Slider -->

			<!-- Menu -->
			<div class="container">
				<nav class="navbar navbar-inverse">
					<ul class="nav nav-tabs nav-justified" role="tablist">
						<li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
						<li role="presentation"><a href="#eletronica" aria-controls="eletronica" role="tab" data-toggle="tab">Eletrônica</a></li>
						<li role="presentation"><a href="#rock" aria-controls="rock" role="tab" data-toggle="tab">Rock</a></li>
						<li role="presentation"><a href="#sertanejo" aria-controls="sertanejo" role="tab" data-toggle="tab">Sertanejo</a></li>
					</ul>
				</nav>
			</div><!-- Fim do Menu -->

		</header><!-- Fim do Cabeçalho -->

		<!-- Conteúdo Principal -->
		<main>

			<!-- Fotos das Baladas -->
			<div class="tab-content">
				<div role="tabpanel" class="tab-pane fade in active" id="home">
					<div class="container">
						<div class="row">
							<?= mostraImagens('eletronica') . mostraImagens('rock') . mostraImagens('sertanejo'); ?>
						</div>
					</div>
				</div>

				<div role="tabpanel" class="tab-pane fade" id="eletronica">
					<div class="container">
						<div class="row">
							<?= mostraImagens('eletronica'); ?>
						</div>
					</div>
				</div>

				<div role="tabpanel" class="tab-pane fade" id="rock">
					<div class="container">
						<div class="row">
							<?= mostraImagens('rock'); ?>
						</div>
					</div>
				</div>

				<div role="tabpanel" class="tab-pane fade" id="sertanejo">
					<div class="container">
						<div class="row">
							<?= mostraImagens('sertanejo'); ?>
						</div>
					</div>
				</div>
			</div><!-- Fim das Fotos das Baladas -->

		</main><!-- Fim do Conteúdo Principal -->

		<!-- Rodapé -->
		<footer>

			<div class="container text-center">
				<em>Bora pra Balada &copy; 2016</em>
			</div>

		</footer><!-- Fim do Rodapé -->

		<!-- Jquery (Necessário para Rodar Bootstrap) -->
		<script src="js/jquery.min.js"></script>
		<!-- Javascript Bootstrap -->
		<script src="js/bootstrap.min.js"></script>
    </body>
</html>

<?php
	
	function mostraImagens($estilo) {
		$estrutura = '';
			for ($i=1; $i <= 3; $i++) { 
				$estrutura .= 
				'       
					<div class="col-lg-4 col-md-6 col-xs-12">
		                <a class="thumbnail" href="#">
		                    <img class="img-responsive" src="img/' . $estilo . '/' . $i . '.jpg" alt="">
		                </a>
		            </div>
				';
			}

		return $estrutura;
	}

?>
		

