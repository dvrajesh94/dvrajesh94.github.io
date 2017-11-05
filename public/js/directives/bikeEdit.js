angular.module('bikepage')
.directive ('bikeEdit', ['$window', '$http', 'bikeService',  function($window, $http, bikeService){
	return{
		restrict:'E',
		templateUrl: "../templates/directives/bikeEdit.html",	
		
		link : function(scope){

			scope.unCheck = scope.unCheck1 = scope.unCheck2 = false
			scope.edit = false;

			scope.editYamaha = function(){
				console.log("this is edits");
				scope.edit='yamaha'
			}

			scope.editBajaj = function(){
				scope.edit='bajaj'
			}

			scope.editHarley = function(){
				scope.edit='harley'
			}

			scope.placeOrder = function(){
				if(scope.brand == undefined){
					$window.alert("Please select atleast one bike!!");
					return
				}
				else if(scope.edit == 'yamaha' || scope.edit == 'bajaj' || scope.edit == 'harley'){
					$window.alert("Please Save Your Changes!!");
					return
				}
				scope.count = 0;
				angular.forEach(scope.bikeDetails, function(bikeDts){
					scope.count = scope.count + 1
					if(scope.count<4){
						if(scope.brand == bikeDts.__t){	
							if(bikeDts.displacement!=null || bikeDts.gearsCount!=null || bikeDts.topSpeed!=null){
								console.log(bikeDts);
								bikeDts.name = scope.logName
								scope.disableCheck = false;
								localStorage.setItem("disableCheck", scope.disableCheck);
								bikeService.create(bikeDts)
								.then(function(sent){
									console.log('sent data', sent);

								})
								.catch(function(err){
									console.log("error", err);
								});
								$window.location.reload();
								$window.alert("Order placed for" + ' ' + bikeDts.__t);
							}	
							else{
								$window.alert("Please select Displacement, Gears-count and Top-speed for Yamaha!");	
							}	
						}
					}	
				})	

			}
			scope.clearAll = function(){
				scope.edit = 'false'
				scope.unCheck = scope.unCheck1 = scope.unCheck2 = false
				scope.brand = undefined
				scope.count2 = 0
				angular.forEach(scope.bikeDetails, function(bikeDts){
					scope.count2 = scope.count2 + 1
					if(scope.count2<4){
						bikeDts.displacement = 150
						bikeDts.gearsCount = 4
						bikeDts.topSpeed = '100-120'
						console.log("scope.brand", scope.brand);
						if (bikeDts.__t == 'yamaha'){
							bikeDts.cost = 100000
						}
						else if (bikeDts.__t == 'bajaj'){
							bikeDts.cost = 200000
						}
						else if (bikeDts.__t == 'harley'){
							bikeDts.cost = 300000
						}	
					}			
				})	
			}
		},
	}
}]);