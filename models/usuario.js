const { Schema, model } = require('mongoose');



const usuarioSchema = Schema({

    nombre:{
      type: String,
      required: [ true, 'El nombre es obligatorio' ],
    },

    correo:{
      type: String,
      required: [ true, 'El correo es obligatorio' ],
      unique: true
    },

    contraseña:{
      type: String,
      required: [ true, 'La contraseña es obligatorio' ]
    },

    img:{
      type: String,
    },

    rol:{
      type: String,
      required: [ true, 'El rol es obligatorio' ],
      emun: [ 'ADMIN_ROLE', 'USER_ROLE' ]
    },

    estado:{
      type: Boolean,
      default: true, 

    },

    google:{
      type: Boolean,
      default: false, 
    }




})

usuarioSchema.methods.toJSON = function(){

      const { __v, contraseña, _id, ...usuario } = this.toObject();
      usuario.uid = _id
     return usuario;
}

module.exports = model( 'Usuario', usuarioSchema )
