//--------------------------------------------------------------------------importo modulos-----------------------------------------------------------------------------------------

//uso: express,mongoose,dotenv,morgan,cors,nodemon.

const express=require('express');
const app=express();
const db = require('./connections/database'); //importo la conexion a la base de datos
require('dotenv').config();
const cors = require('cors');
const morgan=require('morgan');
const routes = require('./routes/routes');


//---------------------------------------------------------------------------uso y configuro modulos-------------------------------------------------------------------------------------------

app.use(express.json({limit: '50mb',  extended: true, }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }))
app.disable("x-powered-by");

app.use(
  cors({
    exposedHeaders: [
      "totalItems",
      "totalPage",
      "pageSize",
      "currentPage",
      "user-updated",
      "lastModified",
    ],
  })
);

//---------------------------------------------------------------------------uso y configuro middlewares miscel-----------------------------------------------------------------------------------

app.use(morgan('dev'));

//----------------------------------------------------------------------------declaro las rutas a usar en mi server------------------------------------------------------------------------------------

// Configuración global de rutas
app.use('/', routes);

//---------------------------------------------------------------------------set de servidor------------------------------------------------------------------------------------------------

app.set('port', process.env.PORT || 4000 );

app.listen(app.get('port'), () => {
  console.log(`API REST corriendo en localhost:${app.get('port')}`);
  
});      