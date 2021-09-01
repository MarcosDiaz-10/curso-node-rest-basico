const { Schema, model } = require('mongoose');



const ProductoSchema =  Schema({
    nombre: {
        type: String,
        required: [ true, 'Se requiere un nombre'],
        unique: true
    },

    estado: {
        type: Boolean,
        default: true
    },

    categoria:{
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    },

    usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },

    precio: {
        type: Number,
        default: 0,

    },

    descripcion:{
        type: String,
        required: [ true, 'Se nesecita una descripcion' ],
    },

    disponible: {
        type: Boolean,
        default: true
    }

})


ProductoSchema.methods.toJSON = function () {
   
    const { __v, estado, ...producto } = this.toObject();
    
    return producto;
}


module.exports = model( 'Producto', ProductoSchema )