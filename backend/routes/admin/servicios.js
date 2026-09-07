var express = require('express');
var router = express.Router();
var serviciosModel = require("./../../models/serviciosModel");
var cloudinary = require("cloudinary").v2;

/* Vista principal de servicios */
router.get('/', async function(req, res, next) {
  var servicios = await serviciosModel.getServicios();
  
  servicios = servicios.map(servicio => {
    // Leemos 'imagen_id' directamente desde MySQL
    if (servicio.imagen_id) {
      const imagen = cloudinary.url(servicio.imagen_id, {
        width: 100,
        height: 100,
        crop: 'fill'
      });
      return { ...servicio, imagen };
    } else {
      return { ...servicio, imagen: '' };
    }
  });
  
  res.render('admin/servicios', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    servicios
  });
});

/* Vista del formulario agregar */
router.get("/agregar", (req, res, next) => {
  res.render("admin/agregar", {
    layout: "admin/layout"
  });
});

router.get("/eliminar/:id", async (req, res, next) => {
  var id = req.params.id;
 await serviciosModel.deleteServicioById(id);
  res.redirect("/admin/servicios");
});

/* POST para guardar el servicio */
router.post('/agregar', async (req, res, next) => {
  try {
    var imagen_id = "";

    // 1. Procesamos la imagen si se subió algún archivo
    if (req.files && Object.keys(req.files).length > 0) {
      let imagen = req.files.imagen;
      let result = await cloudinary.uploader.upload(imagen.tempFilePath);
      imagen_id = result.public_id;
    }

    // 2. Validamos los campos requeridos
    if (
      req.body.nombre != "" && 
      req.body.duracion != "" && 
      req.body.descripcion != ""
    ) {
      // 3. Insertamos explícitamente enviando la propiedad 'imagen_id'
      await serviciosModel.insertServicio({
        nombre: req.body.nombre,
        duracion: req.body.duracion,
        descripcion: req.body.descripcion,
        imagen_id: imagen_id // Coincide exactamente con la columna de MySQL
      });

      res.redirect('/admin/servicios');
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true, 
        message: 'Todos los campos son requeridos'
      });
    }

  } catch (error) {
    console.log(error);
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true, 
      message: 'No se pudo cargar el servicio'
    });
  }
});

router.get("/modificar/:id", async (req, res, next) => {
  var id = req.params.id;
  var servicio = await serviciosModel.getServiciosById(id);
  res.render("admin/modificar", {
    layout: "admin/layout",
    servicio
  });
});

/* para modificar el servicio */
router.post('/modificar', async (req, res, next) => {
  try {

    var obj = {
      nombre: req.body.nombre,
      duracion: req.body.duracion,
      descripcion: req.body.descripcion
    }

    console.log(obj);

    await serviciosModel.modificarServicioById(obj, req.body.id);
    res.redirect('/admin/servicios');

  } catch (error) {
    console.log(error);
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se pudo modificar el servicio'
    });
  }
});


module.exports = router;