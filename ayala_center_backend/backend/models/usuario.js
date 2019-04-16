exports = module.exports = function(app, mongoose){

  var usuarioSchema = new mongoose.Schema({
    ci: { type: String },
    nombre: { type: String },
    apellido: { type: String },
    encargado: {type: String},
    telefono: {type: String},
    sucursal: {type: String} 
  });

mongoose.model('USUARIO', usuarioSchema);
};