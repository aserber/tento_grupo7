const express = require('express');
const router = express.Router();
const apiControllerUser = require('../../controllers/apis/apiControllerUser')

router.get('/user/', apiControllerUser.list);//listado de todos los productos

//router.post('/api/products/', apiController.store); //guarda un producto

router.get('/user/:id', apiControllerUser.show); //busca 1 producto por id

//router.get('/products/search', apiController.search); // busca un producto

//router.delete('/products/:id', apiController.delete); //elimina 1 producto por id



module.exports = router;