angular.module('bikepage').factory('bikeService', ['$http', function($http) {
  bikeData = {};
  bikeData.get = function(){  
    return $http.get('http://localhost:4000/api/orderedBikes');
  }
  
  bikeData.create = function(order){
    console.log('order', order);
    return $http.post('http://localhost:4000/api/bikesOrder', order); 
  }

  bikeData.delete = function(id){
    console.log("id", id);
    return $http.delete('http://localhost:4000/api/bikesOrder/'+ id);
  }
  return bikeData;
}]);