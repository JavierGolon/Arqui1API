var express = require('express');
var router = express.Router();

const data = require('./Data.json');
 // metodo get

 router.get('/GetData',function(req,res,next){
   if(data.length==0){
      const msg ={
         "Tipo":"Cola Vacia",
         "Contenido":"Empty"
      }
      res.status(200).json(msg);
   }else{
      const popfirst = data[0];
      res.status(200).json(popfirst);
      data.shift();
   } 
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