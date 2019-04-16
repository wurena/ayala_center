var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://40.113.239.113:27017/ayala_center', function(err, res) {
  if(err) {
    console.log('ERROR: Connected to Database');
  } else{
    console.log('Connected to Database');
  };  
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'content-type');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'POST,GET,DELETE');

        return res.status(200).json({});
    }

    next();
});

// Import Models and controllers Product
var prod_model = require('./models/product')(app, mongoose);
var prod_ctrl = require('./controllers/prod_controller');

// Import Models and controllers Sucursal
var suc_model = require('./models/sucursal')(app, mongoose);
var suc_ctrl = require('./controllers/sucursal_controller');

// Import Models and controllers Usuario
var user_model = require('./models/usuario')(app, mongoose);
var user_ctrl = require('./controllers/usuario_controller');

// Main Path Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Ayala Center API. ok!!");
});
app.use(router);

// API Product routes
var prodRoute = express.Router();

prodRoute.route('/prod')
  .get(prod_ctrl.getAllProducts)
  .post(prod_ctrl.addProducts);

prodRoute.route('/prod/:id')
  .delete(prod_ctrl.deleteProd);

app.use('/api', prodRoute);

// API Sucursal routes
var sucRoute = express.Router();

sucRoute.route('/suc')
  .get(suc_ctrl.getAllSuc)
  .post(suc_ctrl.addSuc);

sucRoute.route('/suc/:id')
  .delete(suc_ctrl.deleteSuc);

app.use('/api', sucRoute);

// API user routes
var userRoute = express.Router();

userRoute.route('/user')
  .get(user_ctrl.getAllUsers)
  .post(user_ctrl.addUser);

userRoute.route('/user/:id')
  .delete(user_ctrl.deleteUser);

app.use('/api', userRoute);

// Start server
app.listen(3000, '0.0.0.0', function() {
  console.log("Node server running on http://localhost:3000");
});
