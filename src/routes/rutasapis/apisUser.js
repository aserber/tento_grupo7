const express = require('express');
const router = express.Router();
const apiControllerUser = require('../../controllers/apis/apiControllerUser')

router.get('/user/', apiControllerUser.list);//listado de todos los usuarios
router.get('/user/:id', apiControllerUser.show); //busca 1 usuario por id
router.post('/user/', apiControllerUser.store); //guarda un usuario
router.delete('/user/:id', apiControllerUser.delete); //borra un usuario
router.get('/search', apiControllerUser.search);//listado de todos los usuarios



//router.get('/products/search', apiController.search); // busca un producto




module.exports = router;