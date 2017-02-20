(function(){
	'use strict';
	
	var app = angular.module('coffeeAppList',[]);
	
	var ListController = function($scope, ListService) {
		//$scope.list = ListService.populateList;
		//$scope.random = ListService.list;
	};
	app.controller('ListController',['$scope', 'ListService', ListController]);
}());