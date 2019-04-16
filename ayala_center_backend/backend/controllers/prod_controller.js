//File: controllers/gpsController.js
var mongoose = require('mongoose');
var Prod  = mongoose.model('PRODUCT');

//GET - Return all Product in DB
exports.getAllProducts = function(req, res) {
	console.log('call to get all products...');
	Prod.find(function(err, prod) {
    if(err) res.send(500, err.message);

    console.log('GET /api/prod')
		res.status(200).jsonp(prod);
	});
};

//POST - Insert a new in the DB
exports.addProducts = function(req, res) {
	console.log('POST /api/prod');
	console.log(req.body);

	var prod = new Prod({
        sucursal: req.body.suscursal,
        cantidad: req.body.cantidad,
        nombre: req.body.nombre,
        description: req.body.description,
        codigo: req.body.codigo,
        bar_code: req.body.bar_code,
        tipo : req.body.tipo,
	});

	prod.save(function(err, prod) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(prod);
	});
};

//DELETE - Delete point by id
exports.deleteProd = function(req, res) {
	console.log("DELETE api/prod/ " + req.params.id);
	Prod.findById(req.params.id, function(err, prod) {
		prod.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(prod);
		})
	});
};
