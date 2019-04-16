exports = module.exports = function(app, mongoose){

  var sucursalSchema = new mongoose.Schema({
    codigo: {type: String},
    nombre:    { type: String },
    description:    { type: String },
    encargado: {type: String},
    telefono: {type: String} 
  });

mongoose.model('SUC', sucursalSchema);
};