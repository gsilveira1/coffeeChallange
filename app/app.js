(function(){
	'use strict';
	var app =  angular.module('coffeeApp', ['ngRoute',
											'LocalStorageModule',
											'coffeeAppHome',
											'coffeeAppSchedules',
											'coffeeAppPeople']);
		
		app.config(['$locationProvider',
				    '$routeProvider', 
				    'localStorageServiceProvider', function($locationProvider, $routeProvider, localStorageServiceProvider) {

			localStorageServiceProvider.setPrefix('coffeeApp').setDefaultToCookie(false);
			
			$locationProvider.hashPrefix('!');
		  	
		  	$routeProvider
				.when('/home', {
				    templateUrl: 'views/home/home.view.html',
				    controller: 'HomeController'
				})
				.when('/schedules', {
					templateUrl: 'views/schedules/schedules.view.html',
					controller: 'SchedulesController'
				})
				.when('/people', {
				    templateUrl: 'views/people/people.view.html',
				    controller: 'PeopleController'
				})
				.otherwise({redirectTo: '/home'});
		}]);
}());

