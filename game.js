$(document).ready(function(){
	
	/** Lanzamiento de Dados **/

	var lanzados = 0;
	/*var seg = 0;
	console.log(seg);*/
	$("#dadojs20").click(function(){
		lanzados++;
		if (lanzados >= 1) {
			$("p.numero, p.lanzados").html("");
		};
		var dado = Math.floor((Math.random() * 20) + 1);
		/*if (dado == (seg + 1)) {
			seg++;
			console.log(seg);
		}*/
		$(".numero").prepend(dado);
		/* $(".seg").prepend(seg); */ 
		$(".lanzados").prepend(lanzados);
	});

	/** Fin Dados**/

	/** Paso 1 **/

	var nombrep;
	$(".paso-1 > .listo").click(function(){
		var nombrep = document.getElementsByName('nombre-p')[0].value;
		if (! nombrep) {
			$('<span class="advertencia">Escribe un nombre.</span>').insertAfter(".listo");
		} else {
			$(".paso-1").fadeOut('slow', function(){
				$(".advertencia").hide();
				$(".historia.n").append(nombrep, ".");
				$(".paso-2").fadeIn('slow');
			});
		}
	});

	/** Fin Paso 1 **/

	/** Paso 2 **/

	var arma1;
	$(".paso-2 > .listo").click(function(){
		var arma1 = document.getElementsByName('objeto')[0].value;
		if (! arma1) {
			$('<span class="advertencia">Escoge un objeto.</span>').insertAfter(".listo");
		} else {
			$(".paso-2").fadeOut('slow', function(){
				$(".advertencia").hide();
				$(".historia.arma1").append(arma1, ".");
				$(".paso-3").fadeIn('slow');
			});
		}
	});

	/** Fin paso 2 **/

});
