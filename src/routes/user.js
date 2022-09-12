const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { body } = require("express-validator");
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const uploadFile = require ("../middlewares/multerMiddleware")
const authMiddleware = require('../middlewares/auth');
const authiMiddleware = require('../middlewares/auth2');
const auth3Middleware = require('../middlewares/auth3');
const validaciones = require("../middlewares/validaciones");


router.get('/registro', authMiddleware, userController.register); //u
router.post('/registro', uploadFile.single('avatar'),validaciones.validar('register'), userController.save);
router.get('/login', auth3Middleware,userController.login); //u
router.post('/login',userController.ingresar);
router.get('/logout', userController.logout);
router.get('/profile', authiMiddleware, userController.profile);//
router.get('/edit/:id', userController.edit); 
router.post('/profile/:id',uploadFile.single('avatar'),validaciones.validar('update'), userController.update);
router.get('/usuario', auth3Middleware,userController.login); //u

module.exports = router;