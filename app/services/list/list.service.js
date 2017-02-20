(function(){
	'use strict';

	var ListService = function(PeopleService, localStorageService) {
  		var list = [];
		
		var getRandom = function(min, max){
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min)) + min;
		};

		var createList = function(min, max, current){
			var listReturn;
			if (current===undefined) {
				current = getRandom(min,max);
			}
			if(list.length==0){
				list.push(current);
			}
			if(list.length==max) {
				listReturn = list;
				list = [];
		        return listReturn;
		    }
		    if(list.indexOf(current)==-1) {
		    	list.push(current);
		    	return createList(min,max,getRandom(min,max));
		    }
		    return createList(min,max,getRandom(min,max));
		};
		
		var populateList = function (people) {
			var list = createList(0,PeopleService.getPeople().length);
			var index = 0;
			var peopleList = { 'Monday': [{'name': 'Segunda'}], 'Tuesday': [{'name': 'Terça'}], 'Wednesday': [{'name': 'Quarta'}], 'Thursday': [{'name': 'Quinta'}], 'Friday': [{'name': 'Sexta'}]};
			for(var key in peopleList){
				if(index == people.length){
					index = 0;
				}
			  	peopleList[key].push(people[list[index]]);
			  	if(index+1 > people.length-1){
			  		index = 0;
			  		peopleList[key].push(people[list[index]]);
			  		index= index+1;
			  	}else{
					peopleList[key].push(people[list[index+1]]);
					index = index + 2;
			  	}
			}
			return peopleList;
		};

		var getList = function(){
			return JSON.parse(localStorageService.get('List'));
		}

		var saveList = function(listForSave){
			localStorageService.set('List', JSON.stringify(listForSave,null,0));
			return getList();
		};

		return {
			list: populateList,
			saveList: saveList,
			getList: getList
		};
	};

	var module = angular.module('coffeeAppPeople');
		module.factory("ListService", ['PeopleService', 'localStorageService', ListService]);
}());