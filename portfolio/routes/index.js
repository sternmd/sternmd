var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Maxwell Stern Portfolio | Web Development & Design' });
});
tom
module.exports = router;
