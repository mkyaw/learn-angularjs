var app = angular.module('myAngularApp', []);
app.controller('myAngularCtrl', function($scope){
	$scope.fname = "John";
	$scope.lname = "Smith";
	$scope.fullName = function() {
		return $scope.fname + " " + $scope.lname;
	}
});