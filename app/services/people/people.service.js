(function(){
	'use strict';

	var PeopleService =  function(localStorageService) {
			if(localStorageService.isSupported) {
				var key = "People";
				var storageType = localStorageService.getStorageType();

				var getPeople = function(){
					var collection =  JSON.parse(localStorageService.get(key));
					if(collection == null){
						return false;				
					}else{
						console.log(collection);
						return collection;
					}
				};

				var setPeople = function(name){
					var content = { 
						'id':  1,
						'name': name 
					};

					var peopleCollection = JSON.parse(localStorageService.get(key));
					
					if(peopleCollection == null){
						peopleCollection = [];				
					}else{
						for(var i = 0; i < peopleCollection.length; i++ ) {
							var error = 0;
							if(peopleCollection[i].name == name){
								error++;
							}
						}
					}

					if(error > 0 ){
						return 'false';
					}else{
						peopleCollection.push(content);
						localStorageService.set(key, JSON.stringify(peopleCollection,null,0));
						return JSON.parse(localStorageService.get(key));
					}
				};

  			}

			return {
				setPeople: setPeople,
				getPeople: getPeople,
				//excludePeople: excludePeople
			};
		};

	var module = angular.module('coffeeAppPeople');
		module.factory("PeopleService", ['localStorageService', PeopleService]);
}());