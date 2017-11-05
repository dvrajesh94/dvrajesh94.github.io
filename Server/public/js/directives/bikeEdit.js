angular.module('bikepage')
.directive ('bikeEdit', ['$window', function($window){
	return{
		link : function(scope){
			scope.yamaha = scope.bajaj = scope.harley = false;
			scope.edit = scope.edit1 = scope.edit2 = false;
			scope.edits = function(){
				scope.edit=true
			}
			scope.edits1 = function(){
				scope.edit1=true
			}
			scope.edits2 = function(){
				scope.edit2=true
			}
			scope.save = function(){
				if(scope.edit){
					if(scope.selectedDisplace!=null || scope.gear!=null || scope.speed!=null){
						scope.cost[0].value = 100000
					}
					if(scope.selectedDisplace==120){
						$window.alert("At displacement as 120 the gears-count=4 and speed=100-120 by default!!");
						scope.gear=4
						scope.speed='100-120'	
					}
					if((scope.selectedDisplace>120 && scope.selectedDisplace<221) && (scope.gear==4 || scope.gear==5 || scope.gear==6) && (scope.speed=='100-120' || scope.speed=='120-140') && (scope.selectedDisplace!=null || scope.gear!=null || scope.speed!=null)){
						scope.cost[0].value = scope.cost[0].value + 25000
					}
					if((scope.selectedDisplace>220 && scope.selectedDisplace<401) && (scope.gear==5 || scope.gear==6) && (scope.speed=='140-160' || scope.speed=='160-180') && (scope.selectedDisplace!=null || scope.gear!=null || scope.speed!=null)){
						scope.cost[0].value = scope.cost[0].value + 50000
					}
					if((scope.selectedDisplace>400 && scope.selectedDisplace<701) && (scope.gear==6) && (scope.speed=='180-200') && (scope.selectedDisplace!=null || scope.gear!=null || scope.speed!=null)){
						scope.cost[0].value = scope.cost[0].value + 75000
					}
					scope.edit = false
				}
				else if(scope.edit1){
					if(scope.selectedDisplace1!=null || scope.gear1!=null || scope.speed1!=null){
						scope.cost[1].value = 200000
					}
					if(scope.selectedDisplace1==120){
						$window.alert("At displacement as 120 the gears-count=4 and speed=100-120 by default!!");
						scope.gear1=4
						scope.speed1='100-120'	
					}
					if((scope.selectedDisplace1>120 && scope.selectedDisplace1<221) && (scope.gear1==4 || scope.gear1==5 || scope.gear1==6) && (scope.speed1=='100-120' || scope.speed1=='120-140') && (scope.selectedDisplace1!=null || scope.gear1!=null || scope.speed1!=null)){
						scope.cost[1].value = scope.cost[1].value + 50000
					}
					if((scope.selectedDisplace1>220 && scope.selectedDisplace1<401) && (scope.gear1==5 || scope.gear1==6) && (scope.speed1=='140-160' || scope.speed1=='160-180') && (scope.selectedDisplace1!=null || scope.gear1!=null || scope.speed1!=null)){
						scope.cost[1].value = scope.cost[1].value + 75000
					}
					if((scope.selectedDisplace1>400 && scope.selectedDisplace1<701) && (scope.gear1==6) && (scope.speed1=='180-200') && (scope.selectedDisplace1!=null || scope.gear1!=null || scope.speed1!=null)){
						scope.cost[1].value = scope.cost[1].value + 100000
					}
					scope.edit1 = false
				}
				else if(scope.edit2){
					if(scope.selectedDisplace2!=null || scope.gear2!=null || scope.speed2!=null){
						scope.cost[2].value = 300000
					}
					if(scope.selectedDisplace2==120){
						$window.alert("At displacement as 120 the gears-count=4 and speed=100-120 by default!!");
						scope.gear2=4
						scope.speed2='100-120'	
					}
					if((scope.selectedDisplace2>120 && scope.selectedDisplace2<221) && (scope.gear2==4 || scope.gear2==5 || scope.gear2==6) && (scope.speed2=='100-120' || scope.speed2=='120-140') && (scope.selectedDisplace2!=null || scope.gear2!=null || scope.speed2!=null)){
						scope.cost[2].value = scope.cost[2].value + 75000
					}
					if((scope.selectedDisplace2>220 && scope.selectedDisplace2<401) && (scope.gear2==5 || scope.gear2==6) && (scope.speed2=='140-160' || scope.speed2=='160-180') && (scope.selectedDisplace2!=null || scope.gear2!=null || scope.speed2!=null)){
						scope.cost[2].value = scope.cost[2].value + 100000
					}
					if((scope.selectedDisplace2>400 && scope.selectedDisplace2<701) && (scope.gear2==6) && (scope.speed2=='180-200') && (scope.selectedDisplace2!=null || scope.gear2!=null || scope.speed2!=null)){
						scope.cost[2].value = scope.cost[2].value + 125000
					}
					scope.edit2 = false
				}
			}
			scope.placeOrder = function(){
				if(!scope.yamaha){
					if(!scope.bajaj){
						if (!scope.harley){
							$window.alert("Please select atleast one bike!!");
							return
							
						}	
					}
				}
				if(scope.yamaha){	
					if(scope.selectedDisplace!=null || scope.gear!=null || scope.speed!=null){
						$window.alert("Order placed for yamaha");
					}
					else{
						$window.alert("Please select Displacement, Gears-count and Top-speed for Yamaha!");	
					}	
				}
				if(scope.bajaj){	
					if(scope.selectedDisplace1!=null || scope.gear1!=null || scope.speed1!=null){
						$window.alert("Order placed for bajaj");
					}
					else{
						$window.alert("Please select Displacement, Gears-count and Top-speed for Bajaj!");	
					}
				}
				if(scope.harley){	
					if(scope.selectedDisplace2!=null || scope.gear2!=null || scope.speed2!=null){
						$window.alert("Order placed for harley");
					}
					else{
						$window.alert("Please select Displacement, Gears-count and Top-speed for Harley!");	
					}
				}
			}
			scope.clearAll = function(){
				scope.selectedDisplace = scope.selectedDisplace1 = scope.selectedDisplace2 = scope.gear = scope.gear1 = scope.gear2 = scope.speed = scope.speed1 = scope.speed2 = null
				scope.cost[0].value = 100000
				scope.cost[1].value = 200000
				scope.cost[2].value = 300000
			}
		},
		restrict:'E',
		/*template: "<div>hello!!</div>",*/
		/*controller: 'bikes',*/
		templateUrl: "../templates/directives/bikeEdit.html"
		/*scope:{	
			displacement: "="
			gears: "="
			speedRange: "="
			cost: "="
		}*/	
	}
}]);