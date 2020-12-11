var express = require('express');
var router = express.Router();

// Contoller modules
const snowboard_controller = require('../controllers/snowboardController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET request to read Snowboard.
router.get('/snowboards', snowboard_controller.snowboard_read_get);

// GET request for individual snowboard
router.get('/snowboards/:id', snowboard_controller.snowboardItem_read_get)

module.exports = router;
