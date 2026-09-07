var express = require('express');
var router = express.Router();
var serviciosModel = require("../models/serviciosModel");
var cloudinary = require("cloudinary").v2;


router.get('/', async function(req, res, next) {
  var servicios = await serviciosModel.getServicios();
  
  servicios = servicios.map(servicio => {

    if (servicio.imagen_id) {
      const imagen = cloudinary.url(servicio.imagen_id, {
        width: 300,
        height: 300,
        crop: 'fill'
      });
      return { ...servicio, imagen };
    } else {
      return { ...servicio, imagen: '' };
    }
  });
  
  res.json(servicios);
  });

  module.exports = router;