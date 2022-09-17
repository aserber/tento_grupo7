const express = require('express');
const router = express.Router();
const apiController = require('../../controllers/apis/apisController')

router.get('/products/', apiController.list);//listado de todos los productos

router.get('/products/:id', apiController.show); //busca 1 producto por id

router.post('/products/', apiController.store); //guarda un producto

//router.get('/products/search', apiController.search); // busca un producto

router.delete('/products/:id', apiController.delete); //borra un usuario





module.exports = router;