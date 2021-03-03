const ProfesorModel = require('../models/ProfesorModel');


CrearProfesor = async (req, res) => {

    try {
   
      const profesor = new ProfesorModel(req.body);
      await profesor.save();
  
      res.status(200).json({
        mensaje:"profesor creado exitosamente"
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al crear profesor"
      });

    }

  };

  ListarProfesor = async (req, res) => {
   
    try {
   
        const profesor = await ProfesorModel.find();
    
        res.status(200).json({
          profesor
        });
  
      } catch (error) {
        
        res.status(500).json({
          message: "Error al Listar todos los profesores"
        });
  
      }
};

obtenerProfesorId = async (req, res) => {

  try {
 
      const profesor = await ProfesorModel.findById(req.params.id);
  
      res.status(200).json({
        profesor
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al buscar profesor por Id"
      });

    }

};

actualizarProfesor = async (req, res) => {

  try {
 
      await ProfesorModel.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false });
  
      // Respondiendo al cliente
      res.status(200).json({
        message: "profesor  actualizado exitosamente"
      });
  
    } catch (error) {
      
      // Respondiendo al cliente
      res.status(500).json({
        message: "Error al actualizar profesor"
      });
  
    }

};

eliminarProfesor = async (req, res) => {

  try {
 
      await ProfesorModel.findByIdAndDelete(req.params.id);
  
      res.status(200).json({
        mensaje: "profesor  eliminado exitosamente"
      });

    } catch (error) {
      
      res.status(500).json({
        message: "Error al eliminar profesor"
      });

    }

};




  module.exports = { CrearProfesor, ListarProfesor, obtenerProfesorId,actualizarProfesor,eliminarProfesor}; 