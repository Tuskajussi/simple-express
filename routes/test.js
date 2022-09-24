const { response } = require('express');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.send("Get pyynto tullu");
    console.log("joku kävi testissä");
  });

  router.get('/second', function(req, res, next){
    res.send("endpoint =test/second");
    console.log("joku kävi secondissa");
  });


  router.get('/third/:fname?', function(req, res, next){
    let fn = req.params.fname;
    res.send("terve " + fn);
    console.log("terve " + fn);
  });

  router.post('/', function(req, res, next){
    let data = req.body;
    let fn = req.body.fname;
    res.send(fn);
  });

module.exports = router;