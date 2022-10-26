var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/contact_me', function(req, res, next) {
  res.render('contact_me');
});

module.exports = router;
