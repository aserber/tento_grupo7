const express = require('express');
const router = express.Router();

const mainControllers = require('../controllers/mainControllers');

router.get('/', mainControllers.index);

router.get('/index', mainControllers.index);

router.get('/registro', mainControllers.register);

router.post('/registro', mainControllers.create);

router.get('/login', mainControllers.login);

router.get('/adminproduc', mainControllers.adminproduc);

router.get('/productostortas', mainControllers.productostortas);

router.get('/compras', mainControllers.compras);

router.get('/producto', mainControllers.producto);

router.get('/carrito', mainControllers.carrito);

router.get('/descproducto', mainControllers.descproducto);

router.get('/users', mainControllers.list);

router.get('/index2', mainControllers.index2);

router.get('/search1', mainControllers.search1);  



module.exports = router;