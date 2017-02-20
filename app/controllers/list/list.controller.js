(function(){
	'use strict';
	
	var app = angular.module('coffeeAppList',[]);
	
	var ListController = function($scope,  $location, ListService) {
		$scope.list = ListService.getList();
	};
	app.controller('ListController',['$scope', '$location', 'ListService', ListController]);
}());