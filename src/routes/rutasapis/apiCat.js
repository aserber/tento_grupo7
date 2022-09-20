const express = require('express');
const router = express.Router();
const apiCatController = require('../../controllers/apis/apiCatController');

router.get('/categorias', apiCatController.list);//listado de todos los productos
module.exports = router;