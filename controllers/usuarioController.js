const express=require('express');
const router=express.Router();
//const Televisor = require('../src/models/televisor');
const Usuario = require('../models/usuario');

//----------------------------------------------------------------------------controladores-----------------------------------------------------------------------------------------------------
router.get('/',(req,res) => {
  res.send('Hello World!');
  console.log('hi');
});


router.get('/verUsuarios',async(req,res) => {
  const usuarios = await Usuario.find();           
    res.json({
        usuarios   
    });
});


//crear nuevo usuario
router.post('/crearUsuario',async(req,res)=>{ 
  let nuevoUsuario = new Usuario(req.body);
  console.log(nuevoUsuario);
  nuevoUsuario=await nuevoUsuario.save();
  res.send('creado'); 
  /*if(nuevoUsuario){
    res.status(200).json({
        code:"00",
        nuevoUsuario
    });
}else{

}      
  console.log('error');
  res.send('error');*/
});


router.put('/editarUsuario/:id', async(req,res)=>{   
  const{id}=req.params;
  await Usuario.updateOne({_id:id},req.body);
  res.send('actualizado'); 
});


router.delete('/eliminarUsuario/:id', async(req,res) => {
  const {id}=req.params;
  await Usuario.deleteOne({_id:id});
  res.send('eliminado');
} );


router.get('*',(req,res) => {                  // los paths q no existen mandan mensaje error 404
  res.status(404);
  res.send('error 404 page not found');
});


module.exports=router;