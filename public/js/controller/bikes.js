angular.module('bikepage', [])
.controller ('bikesCtrl', ['$scope', '$window', 'bikeService','$location', function($scope, $window, bikeService, $location){
	$scope.displacement = [120, 150, 180, 200, 220, 250, 300, 350, 400, 450, 500, 700];
	$scope.gears = [4, 5, 6]
	$scope.speedRange = ['100-120','120-140','140-160','160-180','180-200']
	$scope.headings = ['Brand',	'Cost', 'Displacement', 'Maximum Power', 'Maximum Torque', 'Cylinders Count', 'Gears Count', 'Seat Height', 'Ground Clearance', 'Kerb/Wet Weight', 'Fuel Tank Capacity', 'Top Speed'];
	$scope.logName = localStorage.getItem("loginName");
	$scope.disCheck = localStorage.getItem("disableCheck");

	bikeService.get()
		.then(function(data){
			$scope.bikeDetails = data.data;
			console.log('scope.bikeDetails', $scope.bikeDetails);
			angular.forEach($scope.bikeDetails, function(bikeDts, index){		
				if(index>2){
					console.log("bikeDts.name, $scope.logName", bikeDts.name, $scope.logName);	
					if(bikeDts.name==$scope.logName){
						console.log("Vamsi:false");
						$scope.disableCheck = false;
					}
					else if(bikeDts.name!=$scope.logName){
						console.log("Rajesh:true");
						$scope.disableCheck = true;
					}
				}
				
				localStorage.setItem("disableCheck", $scope.disableCheck);		
			});
		})
		.catch(function(err){
			console.log("error", err);
		})

	$scope.checkOrders = function(){
		console.log("$scope.disCheck", $scope.disCheck);
		if($scope.disCheck == 'true'){
			alert("No Orders Found, Please Place an Order");
		}
		else if($scope.disCheck == 'false'){
			$window.location.href = './checkOrders.html';
		}
	}	

	$scope.logOut = function(){
		$window.location.href = './login.html';
	}
	
	$scope.goBack = function(){
		$window.location.href = './bikes.html';
	}

	$scope.save = function(){
		$scope.count1 = 0
		angular.forEach($scope.bikeDetails, function(bikeDts){
			$scope.count1 = $scope.count1 + 1
			if($scope.count1<4){
				if($scope.saveBrand == bikeDts.__t){
					if(bikeDts.displacement==120){
						$window.alert("At displacement as 120 the gears-count=4 and speed=100-120 by default!!");
						bikeDts.gearsCount=4
						bikeDts.topSpeed='100-120'	
					}
					if((bikeDts.displacement>120 && bikeDts.displacement<221) && (bikeDts.gearsCount==4 || bikeDts.gearsCount==5 || bikeDts.gearsCount==6) && (bikeDts.topSpeed=='100-120' || bikeDts.topSpeed=='120-140') && (bikeDts.displacement!=null || bikeDts.gearsCount!=null || bikeDts.topSpeed!=null)){
						bikeDts.cost = bikeDts.cost + 25000
					}
					if((bikeDts.displacement>220 && bikeDts.displacement<401) && (bikeDts.gearsCount==5 || bikeDts.gearsCount==6) && (bikeDts.topSpeed=='140-160' || bikeDts.topSpeed=='160-180') && (bikeDts.displacement!=null || bikeDts.gearsCount!=null || bikeDts.topSpeed!=null)){
						bikeDts.cost = bikeDts.cost + 50000
					}
					if((bikeDts.displacement>400 && bikeDts.displacement<701) && (bikeDts.gearsCount==6) && (bikeDts.topSpeed=='180-200') && (bikeDts.displacement!=null || bikeDts.gearsCount!=null || bikeDts.topSpeed!=null)){
						bikeDts.cost = bikeDts.cost + 75000
					}
				}	
			}
		})	
		$scope.edit = 'false'
		
	}

	$scope.delete = function(id){
		$scope.delUser = $window.confirm('Are you sure you want to cancel order?');
		if($scope.delUser){	
			bikeService.delete(id)
				.then(function(data){
					$window.location.reload();
					alert('Deleted Successfully!!');
				})
				.catch(function(err){
					console.log("error", err);
				})
		}
	}

	$scope.login = function(){
		angular.forEach($scope.bikeDetails, function(bikeDts, index){
			if(index>2){	
				if(bikeDts.name==$scope.loginName){
					console.log("Vamsi:false");
					$scope.disableCheck = false;
				}
				else if(bikeDts.name!=$scope.loginName){
					console.log("Rajesh:true");
					$scope.disableCheck = true;
				}
			}		
		});
		localStorage.setItem("disableCheck", $scope.disableCheck);
		localStorage.setItem("loginName", $scope.loginName);
		if($scope.loginName == undefined || $scope.loginName == ''){
			alert('Please enter name to login');
			return;
		}
		else{
			$window.location.href = './bikes.html'; 
		}
	}
}]);
