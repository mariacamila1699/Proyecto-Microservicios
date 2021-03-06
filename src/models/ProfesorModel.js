const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfesorSchema = new Schema({

    nombre: {
      type: String,
      required: 'Nombre'
    },
    apellido: {
        type: String,
        required: 'Apellido'
    },

    identificacion: {
        type: String,
        required: 'Identificacion'
    },
    telefono: {
      type: String,
      required: 'Telefono'
    },
    direccion: {
      type: String,
      required: 'Direccion'
    },
    sexo: {
      type: String,
      required: 'Sexo'
    },
    correo: {
        type: String,
        required: 'Correo'
      },
    Created_date: {
      type: Date,
      default: Date.now
    },
  
  });


  module.exports = mongoose.model('Profesores', ProfesorSchema);