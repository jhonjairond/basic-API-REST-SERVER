//-------------------------------------------------------------------------requiero express----------------------------------------------------------------------------------------------

const express=require('express');
const router=express.Router();

//---------------------------------------------------------------------------declaro el uso de controladores para rutas----------------------------------------------------------------------------------------------

const usuarioController=require('../controllers/usuarioController');

//----------------------------------------------------------------------------rutas-----------------------------------------------------------------------------------------------------

router.use('/',usuarioController);
router.use('/nuevoUsuario',usuarioController); //crear nuevo usuario
router.use('/verUsuarios',usuarioController); //ver usuarios creados
router.use('/editarUsuario/:id',usuarioController); //editar usuario
router.use('/eliminarUsuario/:id',usuarioController); //eliminar usuario



module.exports=router;