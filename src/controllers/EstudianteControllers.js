const express = require('express');
const router = express.Router();


const EstudianteService = require('../services/EstudianteService');


router.route('/Estudiante')
      .get(EstudianteService.ListarEstudiantes)
      .post(EstudianteService.CrearEstudiante);

router.route('/Estudiante/:id')
      .get(EstudianteService.obtenerEstudianteId)
      .put(EstudianteService.actualizarEstudiante)
      .delete(EstudianteService.eliminarEstudiante);      


     
     
 module.exports = router;
