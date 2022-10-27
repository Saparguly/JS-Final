var express = require('express');
const Database = require('../Database/Database');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact_me');
});

router.post("/", function(req, res, next) {
  if(req.body.name !=undefined && req.body.email !=undefined && req.body.message !=undefined)
  Database.addClient(req.body.name, req.body.email, req.body.message);
  res.redirect('contact_me')
  });

module.exports = router;
