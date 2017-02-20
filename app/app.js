(function(){
	'use strict';
	var app =  angular.module('coffeeApp', ['ngRoute',
											'LocalStorageModule',
											'coffeeAppList',
											'coffeeAppPeople']);
		
		app.config(['$locationProvider',
				    '$routeProvider', 
				    'localStorageServiceProvider', function($locationProvider, $routeProvider, localStorageServiceProvider) {

			localStorageServiceProvider.setPrefix('coffeeApp').setDefaultToCookie(false);
			
			$locationProvider.hashPrefix('!');
		  	
		  	$routeProvider
				.when('/list', {
				    templateUrl: 'views/list/list.view.html',
				    controller: 'ListController'
				})
				.when('/people', {
				    templateUrl: 'views/people/people.view.html',
				    controller: 'PeopleController'
				})
				.otherwise({redirectTo: '/people'});
		}]);
}());

