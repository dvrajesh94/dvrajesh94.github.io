angular.module('bikepage').factory('bikeService', ['$http', function($http) {
  $http.get('http://localhost:4000/api/orderedBikes').then(function(response){
  	console.log('response', response);
  });

        /*update : function(nerdData) {
            return $http.post('', bikeData);
        },*/
		

}]);