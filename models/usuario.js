const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  
  nombre:{
    type:String,
    required:true
  },
  apellido:{
    type:String,
    required:true
  }
});

usuarioSchema.index({nombre:'text',aprellido:'text'});  


module.exports = mongoose.model('Usuario', usuarioSchema);