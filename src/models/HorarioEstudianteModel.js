const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HorarioEstudianteSchema = new Schema({

    dia: {
      type: String,
      required: 'Dia'
    },
    hora_inicio: {
        type: String,
        required: 'HoraInicio'
    },
    hora_final: {
        type: String,
        required: 'HoraFinal'
    },

    Created_date: {
        type: Date,
        default: Date.now
      },
    
    });
  
  
    module.exports = mongoose.model('HorariosEstudiantes', HorarioEstudianteSchema);