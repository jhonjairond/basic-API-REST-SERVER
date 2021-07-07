//Archivo configuracion de la base de datos

//requiero modulo mongoose
require('dotenv').config();
var mongoose = require('mongoose');
const db = require('../.env');

//?
mongoose.set('debug', process.env.MODE === 'dev'); 

//conecto a la base de datos
const dbURI = MONGODB_CONNECTION;
mongoose.connect(dbURI, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false});

//si me conecte correctamente a la base de datos
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});