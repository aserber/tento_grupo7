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

module.exports = router;
