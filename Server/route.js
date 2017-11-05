var express = require('express');
var bodyparser = require('body-parser');
var router = express.Router();

var _ = require('lodash');

var Bike = require('./models/bikesServer');
 
router.get('/orderedBikes', function(req, res , next){
  	Bike.find(function (err, bike) {
		if (err){
			console.log(err);
		}
		else{
	  		console.log('rajesh', bike);
  			/*res.json("bike");*/
  			res.json(bike);
		}
	})
});

router.post('/bikesOrder', function(req, res, next){
	"use strict";
	console.log('postng or not?', req.body);
	let newBike = new Bike({
		__t: req.body.__t,
	  cost: req.body.cost,
	  displacement: req.body.displacement,
	  maximumPower: req.body.maximumPower,
	  maximumTorque: req.body.maximumTorque,
	  cylindersCount: req.body.cylindersCount,
	  gearsCount: req.body.gearsCount,
	  seatHeight: req.body.seatHeight,
	  groundClearance: req.body.groundClearance,
	  weight: req.body.weight,
	  tankCapacity: req.body.tankCapacity,
	  topSpeed: req.body.topSpeed,
	  name: req.body.name
	});

	newBike.save(function(err, bike){
		if(err){
			res.status(200).json({msg:"failed to add bike"/**/});
		}
		else{
			res.json(bike);
			console.log('req.body', req.body);
		}
	})
});

router.delete('/bikesOrder/:id', function(req, res, next){
	Bike.remove({_id: req.params.id}, function(err, result){
		if(err){
			res.json(err);
		}
		else{
			res.json(result);
		}
	})
});

module.exports = router;
