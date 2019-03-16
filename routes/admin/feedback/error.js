var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('./feedback/error.ejs',{msg:req.query.msg});
});

module.exports = router;
