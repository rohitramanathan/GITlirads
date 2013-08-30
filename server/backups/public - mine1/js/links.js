angular.module('lirads', [])
	.config(liradsRouter);

function liradsRouter ($routeProvider) {
	$routeProvider
		.when('/', {
		template: '<h3> LIRADS categories </h3>',
		 controller: 'DestinationsCtrl'})
		.when('/lirads1', {
		 template: '<h3>LIRADS 1</h3> ',
		 controller: 'FlightsCtrl'})
		.when('/lirads2', {
		 template: '<h3>LIRADS 2</h3>',
		 controller: 'ReservationsCtrl'});
}