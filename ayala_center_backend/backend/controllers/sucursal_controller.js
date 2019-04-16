//File: controllers/gpsController.js
var mongoose = require('mongoose');
var Suc  = mongoose.model('SUC');

//GET - Return all Product in DB
exports.getAllSuc = function(req, res) {
	console.log('call to get all sucursals...');
	Suc.find(function(err, suc) {
    if(err) res.send(500, err.message);

    console.log('GET /api/suc')
		res.status(200).jsonp(suc);
	});
};

//POST - Insert a new in the DB
exports.addSuc = function(req, res) {
	console.log('POST /api/suc');
	console.log(req.body);

	var suc = new Suc({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        description: req.body.description,
        encargado: req.body.encargado,
        telefono: req.body.telefono        
	});

	suc.save(function(err, suc) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(suc);
	});
};

//DELETE - Delete point by id
exports.deleteSuc = function(req, res) {
	console.log("DELETE api/suc/ " + req.params.id);
	Suc.findById(req.params.id, function(err, suc) {
		suc.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(suc);
		})
	});
};
