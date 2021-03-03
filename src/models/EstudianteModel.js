const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const EstudianteSchema = new Schema({

    nombre: {
      type: String,
      required: 'Nombre'
    },
    apellido: {
        type: String,
        required: 'Apellido'
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
    Created_date: {
      type: Date,
      default: Date.now
    },

    Inscripcion: [{
       type: Schema.Types.ObjectId, 
       ref: "Inscripciones" 
      
    }]

    

    
  });


  module.exports = mongoose.model('Estudiantes', EstudianteSchema);