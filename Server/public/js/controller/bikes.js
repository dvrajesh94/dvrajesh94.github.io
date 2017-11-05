angular.module('bikepage', [])
.controller ('bikesCtrl', ['$scope', '$window','$http', function($scope, $window, $http, bikeService){
	$scope.displacement = [120, 150, 180, 200, 220, 250, 300, 350, 400, 450, 500, 700];
	$scope.gears = [4, 5, 6]
	$scope.speedRange = ['100-120','120-140','140-160','160-180','180-200']
	$scope.cost = [{name:'yamaha', value:100000},{name:'bajaj', value:200000},{name:'harley',value:300000}];
	console.log("coming!!");
	$http.get('http://localhost:4000/api/orderedBikes').then(function(response){
    	console.log('response', response);
    });
    /*bikeService.getbike();*/
}]);
