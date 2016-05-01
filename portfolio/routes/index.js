var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Maxwell Stern | Web Development, Design, SEO' });
});

module.exports = router;