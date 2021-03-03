const EstudianteModel = require('../models/EstudianteModel');


CrearEstudiante = async (req, res) => {

    try {
   
      const estudiante = new EstudianteModel(req.body);
      await estudiante.save();
  
      res.status(200).json({
        mensaje:"Estudiante creado exitosamente"
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al crear un Estudiante"
      });

    }

  };

  ListarEstudiantes = async (req, res) => {
   
    try {
   
        const estudiante = await EstudianteModel.find();
    
        res.status(200).json({
          estudiante
        });
  
      } catch (error) {
        
        res.status(500).json({
          message: "Error al Listar todos los estudiantes"
        });
  
      }
};

obtenerEstudianteId = async (req, res) => {

  try {
 
      const estudiante = await EstudianteModel.findById(req.params.id);
  
      res.status(200).json({
        estudiante
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al obtener estudiante"
      });

    }

};

actualizarEstudiante = async (req, res) => {

  try {
 
      await EstudianteModel.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false });
  
      // Respondiendo al cliente
      res.status(200).json({
        message: "Estudiante  actualizado exitosamente"
      });
  
    } catch (error) {
      
      // Respondiendo al cliente
      res.status(500).json({
        message: "Error al actualizar estudiante"
      });
  
    }

};

eliminarEstudiante = async (req, res) => {

  try {
 
      await EstudianteModel.findByIdAndDelete(req.params.id);
  
      res.status(200).json({
        mensaje: "estudiante  eliminado exitosamente"
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al eliminar estudiante"
      });

    }

};




  module.exports = { CrearEstudiante, ListarEstudiantes, obtenerEstudianteId,actualizarEstudiante,eliminarEstudiante}; 