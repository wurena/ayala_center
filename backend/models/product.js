exports = module.exports = function(app, mongoose){

  var productSchema = new mongoose.Schema({
    sucursal:    { type: String },
    cantidad:    { type: Number },
    nombre:    { type: String },
    description:    { type: String },
    codigo: { type: String},
    bar_code: { type: String}, 
    tipo : {type: String}     
  });

mongoose.model('PRODUCT', productSchema);
};