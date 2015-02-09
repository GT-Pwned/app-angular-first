'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
  });
}])
							//$Scope		//$scope
.controller('View1Ctrl', [ "$scope", function($scope) {
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

}]);
