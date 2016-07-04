angular.module("app").controller('mapaController', function($scope){

$scope.map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: {lat:-16.255613,lng:-47.9267677},
		mapTypeId: google.maps.MapTypeId.ROADMAP
});	

});

