var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/achievements', function(req, res, next) {
  res.render('achievements');
});

module.exports = router;
