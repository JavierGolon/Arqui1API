var express = require('express');
var router = express.Router();

const data = require('./Data.json');
 // metodo get

 router.get('/GetData',function(req,res,next){
    res.json(data);
 });

 // metodo Post

 router.post('/PostData',(req,res) =>{
   const {Tipo,Contenido}= req.body;
   if(Tipo,Contenido){
      const newdata = {...req.body};
      data.push(newdata);
      res.json(data);

   }else{
      res.status(500).json({error:'There was an error'});
   }
 });

 module.exports = router;