(function(){
	'use strict';

	var app = angular.module('coffeeAppPeople', ['ngRoute']);
	
	var PeopleController =  function($scope, PeopleService) {
			var peopleList =  PeopleService.getPeople();
			
			if(angular.isArray(peopleList)){
				$scope.peopleList = peopleList;
			}else{
				$scope.peopleError = 1;
			}

			$scope.addNewPeople = function(person){
				$scope.peopleList = PeopleService.setPeople(person);
			}

		
		};

		app.controller('PeopleController', ['$scope' ,'PeopleService', PeopleController]);
}());