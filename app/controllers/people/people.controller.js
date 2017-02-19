(function(){
	'use strict';

	var app = angular.module('coffeeAppPeople', []);
	
	var PeopleController =  function($scope, PeopleService) {
			var peopleList =  PeopleService.getPeople();
		
			if(angular.isArray(peopleList)){
				$scope.peopleList = peopleList;
			}

			$scope.addNewPeople = function(person){
				var res = PeopleService.setPeople(person);
				$scope.peopleDuplicated = false;
				if(res){
					$scope.peopleList = res;
				}else{
					$scope.peopleDuplicated = true;
				}
				$scope.person = '';								 
			};

			$scope.excludePeople = function($index, $event){
				if(PeopleService.excludePeople($index)){
					angular.element($event.currentTarget).parent().parent().remove();
				}
			};
		
		};

		app.controller('PeopleController', ['$scope', 'PeopleService', PeopleController]);
}());