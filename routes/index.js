var express = require('express');
var router = express.Router();

// Contoller modules
const snowboard_controller = require('../controllers/snowboardController')
const boots_controller = require('../controllers/bootsController')
const bindings_controller = require('../controllers/bindingsController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Anthony's Snow Shop" });
});

// GET request to read Snowboard.
router.get('/snowboards', snowboard_controller.snowboard_read_get);

// GET request for individual snowboard
router.get('/snowboards/:id', snowboard_controller.snowboardItem_read_get)

// GET request to read Boots
router.get('/boots', boots_controller.boots_read_get);

// GET request to read Bindings
router.get('/bindings', bindings_controller.bindings_read_get);


module.exports = router;
