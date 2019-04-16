//File: controllers/gpsController.js
var mongoose = require('mongoose');
var User  = mongoose.model('USUARIO');

//GET - Return all Product in DB
exports.getAllUsers = function(req, res) {
	console.log('call to get all users...');
	User.find(function(err, user) {
    if(err) res.send(500, err.message);

    console.log('GET /api/user')
		res.status(200).jsonp(user);
	});
};

//POST - Insert a new in the DB
exports.addUser = function(req, res) {
	console.log('POST /api/user');
	console.log(req.body);

	var user = new User({
        ci : req.ci,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        encargado: req.body.encargado,
        telefono: req.body.telefono,
        sucursal: req.sucursal        
	});

	user.save(function(err, user) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(user);
	});
};

//DELETE - Delete point by id
exports.deleteUser = function(req, res) {
	console.log("DELETE api/user/ " + req.params.id);
	User.findById(req.params.id, function(err, user) {
		user.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(error);
		})
	});
};
