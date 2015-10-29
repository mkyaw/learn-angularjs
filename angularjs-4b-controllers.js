angular.module('catApp', []).controller('catsCtrl', function($scope){
	$scope.cats = [
		{name : 'Jack', color : 'brown'},
		{name : 'Ted', color : 'black'},
		{name : 'Kit', color : 'white'}
	]
});