(function(){
	'use strict';

	var app = angular.module('coffeeAppPeople', []);
	
	var PeopleController =  function($scope, $route, $location, PeopleService, ListService) {
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
					$route.reload();
				}
			};

			$scope.sortList = function(){
				var people = PeopleService.getPeople();
				var list = ListService.list(people);
				$scope.list = list;
			}

			$scope.saveList = function(){
				if(ListService.saveList($scope.list)){
					$location.path('/list');
				}
			}

		};

		app.controller('PeopleController', ['$scope', '$route', '$location', 'PeopleService', 'ListService',  PeopleController]);
}());