'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
  });
}])
							//$Scope		//$scope
.controller('View1Ctrl', [ "$scope", "$http", function($scope, $http) {
	$scope.Headerbuttons = [
	{"name":"Home","content":"123", "id":"Start", "number":1},
	{"name":"Products","content":"123", "id":"Products", "number":2},
	{"name":"Impressum","content":"123", "id":"Contact", "number":3},
	{"name":"About us","content":"D", "id":"Intention", "number":4},
	{"name":"something","content":"123", "id":"random", "number":5}];

	$scope.Sidebar = [
	{"name":"1", "effect":"", "more":""},	
	{"name":"2", "effect":"", "more":""},
	{"name":"3", "effect":"", "more":""},
	{"name":"4", "effect":"", "more":""},
	{"name":"5", "effect":"", "more":""},
	{"name":"6", "effect":"", "more":""},
	{"name":"7", "effect":"", "more":""},
	{"name":"8", "effect":"", "more":""},
	{"name":"9", "effect":"", "more":""},];



	//$http.get(SidebarContentJSON.php)

	/*$scope.loadContent = function (Column) {
		$scope.
	}
	*/
	/*$scope.mainColumn = [
	{"title":"Home", "main":"muss eine Variable sein!", "style":"border: dotted;float: left"}];

/*
	$http.get('Objects/SidebarContent.json').success(function(data) {
		$scope.sidebar = data;
	}
*/
	//in eine json packen

/*	
	$scope.toggleShowHideBoolean = true;
	$scope.repeats = [
	{"name":"Akx", "title":"Cpt", "rank":"2"},
	{"name":"Bkx", "title":"Gen", "rank":"1"},
	{"name":"Ckx", "title":"Srg", "rank":"3"},
	{"name":"Dkx", "title":"Ltn", "rank":"4"}];

	$scope.orderProp = "rank";
//$scope.name.optionaldepth = value or [array];	syntax für $scope
	//$scope.rnd = json/data.json --> das benutzen um daten einzubinden in einem json ordner
	$scope.runFunction = function() {
		$scope.functionValue = new Date();
	}
	//das sollte als .json umgeschrieben werden
	$scope.hbuttons = [
	{"name":"Impressum", "link":"#/view1/Impressum"},
	{"name":"Home", "link":"#/view1/Home"},
	{"name":"Products", "link":"#/view2/pricing"}]
*/
}]);
