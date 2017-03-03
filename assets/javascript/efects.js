$(document).ready(function(){
	$("#genji").mouseenter(function(){
		$("<audio></audio>").attr({
			'src':'assets/sounds/genji_eco.ogg', 
			'autoplay':'autoplay'
		}).appendTo("body");
	});

	$("#lucio").mouseenter(function(){
		$("<audio></audio>").attr({
			'src':'assets/sounds/lucio_robot.ogg', 
			'autoplay':'autoplay'
		}).appendTo("body");
	});

	$("#pharah").mouseenter(function(){
		$("<audio></audio>").attr({
			'src':'assets/sounds/pharah_menos_volumen.ogg', 
			'autoplay':'autoplay'
		}).appendTo("body");
	});

	$("#zenyata").mouseenter(function(){
		$("<audio></audio>").attr({
			'src':'assets/sounds/zenyata.ogg', 
			'autoplay':'autoplay'
		}).appendTo("body");
	});

	$("#sombra").mouseenter(function(){
		$("<audio></audio>").attr({
			'src':'assets/sounds/sombra.ogg', 
			'autoplay':'autoplay'
		}).appendTo("body");
	});

	$("#dva").mouseenter(function(){
		$("<audio></audio>").attr({
			'src':'assets/sounds/dva.ogg', 
			'autoplay':'autoplay'
		}).appendTo("body");
	});

	$("#soldado76").mouseenter(function(){
		$("<audio></audio>").attr({
			'src':'assets/sounds/soldado76.ogg', 
			'autoplay':'autoplay'
		}).appendTo("body");
	});

	$("#tracer").mouseenter(function(){
		$("<audio></audio>").attr({
			'src':'assets/sounds/tracer.ogg', 
			'autoplay':'autoplay'
		}).appendTo("body");
	});
	alert("Consejo: Baja un poco el volumen de tu navegador antes de ver la pagina. Gracias!");
});
