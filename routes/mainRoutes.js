const express = require('express');
const router = express.Router();

const mainControllers = require('../controllers/mainControllers');

router.get('/', mainControllers.index);

router.get('/index', mainControllers.index);

router.get('/registro', mainControllers.register);

router.get('/login', mainControllers.login);

router.get('/adminproduc', mainControllers.adminproduc);

router.get('/productostortas', mainControllers.productostortas);

router.get('/compras', mainControllers.compras);

router.get('/producto', mainControllers.producto);

router.get('/carrito', mainControllers.carrito);

router.get('/descproducto', mainControllers.descproducto);


//pruebas//

router.get('/list', mainControllers.list);
router.get('/search',mainControllers.search);
router.post('/register', mainControllers.crear);

module.exports = router;