var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/esim1', function(req, res, next){
  res.send("Endpoint /user/esim1");
  console.log("joku kävi endissä");
});

module.exports = router;
