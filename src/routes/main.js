// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');


/*** GET ALL PRODUCTS ***/ 

router.get('/', mainController.home); //m

router.get('/index', mainController.index); // m

router.get('/compras', mainController.compras); //p

router.get('/carrito', mainController.carrito);//p

router.get('/nosotros', mainController.nosotros);//p

router.get('/accesodenegado', mainController.accesodenegado);//p

router.get('/faq', mainController.faq);//p
module.exports = router;
