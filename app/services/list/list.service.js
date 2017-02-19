(function(){
	'use strict';

	var ListService = function(PeopleService) {
  		var list = [];
		
		var getRandom = function(min, max){
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min)) + min;
		};

		var getList = function(min, max, current){
			if (current===undefined) {
				current = getRandom(min,max);
			}
			if(list.length==0){
				list.push(current);
			}
			if(list.length==max) {
		        return false;
		    }
		    if(list.indexOf(current)==-1) {
		    	list.push(current);
		    	return getList(min,max,getRandom(min,max));
		    }
		    return getList(min,max,getRandom(min,max));
		};
		
		var populateList = function () {
			var people = PeopleService.getPeople(); 
			var index = 0;
			var peopleList = [];

			for(var i=0; i < 10; i++){
				if(index == people.length){
					index = 0;
				}
				peopleList[i] = people[list[index]];
				index++;
			}
			return peopleList;
		};

		getList(0,PeopleService.getPeople().length);

		return {
			list: list,
			populateList: populateList()
		};
	};

	var module = angular.module('coffeeAppPeople');
		module.factory("ListService", ['PeopleService', ListService]);
}());