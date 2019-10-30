var express = require('express');
var router = express.Router();

const data = require('./Data.json');
 // metodo get

 router.get('/GetData',function(req,res,next){
    res.json(data);
 });

 module.exports = router;