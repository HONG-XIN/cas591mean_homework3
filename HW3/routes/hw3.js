var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hw3', { title: 'hw3 test' });
});

module.exports = router;
