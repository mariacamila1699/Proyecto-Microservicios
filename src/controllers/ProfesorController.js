const express = require('express');
const router = express.Router();


const ProfesorService = require('../services/ProfesorService');


router.route('/Profesor')
      .get(ProfesorService.ListarProfesor)
      .post(ProfesorService.CrearProfesor);

router.route('/Profesor/:id')
      .get(ProfesorService.obtenerProfesorId)
      .put(ProfesorService.actualizarProfesor)
      .delete(ProfesorService.eliminarProfesor);      


     
     
 module.exports = router;