(function(){
	'use strict';

	var app = angular.module('coffeeAppHome', ['ngRoute']);
		
	var HomeController = function() {
			this.name = 'asd';
		};

		app.controller('HomeController', HomeController);
}());