var mongoose = require('mongoose');

/*mongoose.connect('mongodb://localhost/pump-my-ride')*/

var BikeSchema = new mongoose.Schema({
	__t: String,
  cost: Number,
  displacement: Number,
  maximumPower: String,
  maximumTorque: String,
  cylindersCount: Number,
  gearsCount: Number,
  seatHeight: String,
  groundClearance: String,
  weight: String,
  tankCapacity: String,
  topSpeed: String,
});

var Bike = mongoose.model('Bike', BikeSchema);

/*Bike.create({__t:'harley',cost: 1000, displacement:150 , maximumPower:'16.8 Bhp @ 8500 rpm' , maximumTorque:'15 Nm @ 7500 rpm' , cylindersCount:1 , gearsCount: 4, seatHeight: '800mm', groundClearance: '160mm', weight: '136kg', tankCapacity: '12 litres', topSpeed:'100-120'},
function(err,bike){
	if(err){
		console.log(err);
	}
	else{
		console.log(bike);
	}
});*/
Bike.find(function (err, bike) {
	if (err){
		return console.log(err);
  }
  else{
  	console.log('rajesh', bike)
	}
});

/*Bike.find({cost: 1000},function(err,bike){
	console.log('rajesh1', bike)
});*/

/*Bike.update({displacement:150},{cost:2000,gearsCount:5},
function(err, bike){
	if (err){
		return console.log(err);
  }
  else{
  	console.log('rajesh update', bike)
	}
});*/


