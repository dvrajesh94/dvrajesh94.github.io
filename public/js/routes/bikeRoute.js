angular.module('bikepage1', ['ngRoute'])
.config(['$$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/CheckOrders", {
        templateUrl : "checkOrders.html",
        controller : "bikes.js"
    });
}]);