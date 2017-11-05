
var mongoose = require('mongoose');

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
  name: String,
});

var Bike = module.exports = mongoose.model('Bike', BikeSchema);

/*Bike.create({__t:'yamaha',cost: 100000, displacement:150 , maximumPower:'18 Bhp @ 6500 rpm' , maximumTorque:'20 Nm @ 8500 rpm' , cylindersCount:1 , gearsCount: 4, seatHeight: '900mm', groundClearance: '140mm', weight: '150kg', tankCapacity: '15 litres', topSpeed:'100-120', name:''},
function(err,bike){
	if(err){
		console.log(err);
	}
	else{
		console.log(bike);
	}
});
Bike.create({__t:'bajaj',cost: 200000, displacement:150 , maximumPower:'20 Bhp @ 7500 rpm' , maximumTorque:'18 Nm @ 7500 rpm' , cylindersCount:1 , gearsCount: 4, seatHeight: '800mm', groundClearance: '160mm', weight: '160kg', tankCapacity: '17 litres', topSpeed:'100-120', name:''},
function(err,bike){
  if(err){
    console.log(err);
  }
  else{
    console.log(bike);
  }
});
Bike.create({__t:'harley',cost: 300000, displacement:150 , maximumPower:'22 Bhp @ 8500 rpm' , maximumTorque:'16 Nm @ 6500 rpm' , cylindersCount:1 , gearsCount: 4, seatHeight: '700mm', groundClearance: '130mm', weight: '190kg', tankCapacity: '22 litres', topSpeed:'100-120', name:''},
function(err,bike){
  if(err){
    console.log(err);
  }
  else{
    console.log(bike);
  }
});*/
/*Bike.find(function (err, bike) {
	if (err){
		return console.log(err);
  }
  else{
  	console.log('rajesh', bike)
	}
});*/

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


