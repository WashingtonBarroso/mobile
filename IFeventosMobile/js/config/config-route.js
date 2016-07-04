angular.module('app').config(function($routeProvider){
   
$routeProvider.when('/evento',{
   templateUrl : 'view/evento.html',
   controller  : 'eventoController'
})   

$routeProvider.when('/mapa', {
    templateUrl : 'view/mapa.html',
    controller  : 'mapaController'	
})

$routeProvider.when('/noticia', {
    templateUrl : 'view/noticia.html',
    controller  : 'noticiaController'	
})

$routeProvider.when('/organizador', {
    templateUrl : 'view/organizador.html',
    controller  : 'organizadorController'	
})
 
$routeProvider.when('/palestrante', {
	templateUrl : 'view/palestrante.html',
	controller  : 'palestranteController'

})
$routeProvider.when('/programacao', {
	 templateUrl : 'view/programacao.html',
     controller  : 'programacaoController' 	 
});
	 
$routeProvider.otherwise({redirectTo: "/"});
});





