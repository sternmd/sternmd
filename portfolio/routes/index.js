var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Maxwell Stern Portfolio | Web Development & Design' });
});

router.get('/core', function(req, res, next) {
  res.render('core', { title: 'Maxwell Stern Portfolio | Favorite Graphic Novels' });
});


module.exports = router;
