const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validator = require ("../middlewares/validateRegisterMiddlewares");
const { body } = require("express-validator");
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const authMiddleware = require('../middlewares/auth');
//let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usersBase.json')))

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../../public/images/usuariosimg'));
  },
  filename: function (req, file, cb) {
    cb(null, 'usuario-'+Date.now()+path.extname(file.originalname))
  }
})

const upload = multer({ storage })

//const validacionesLogin = [
//  body('email').isEmail().withMessage('Agregar un email válido'),
//  body('password').isLength({min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),
//  body('email').custom( (value  ) =>{
//    for (let i = 0; i < archivoUsuarios.length; i++) {
//        if (archivoUsuarios[i].email == value) {
//            return true    
//        }
//    }
//    return res.redirect('/');
//  }).withMessage('Usuario no se encuentra registrado...'),
//
//  //Aquí valido si la contraseña colocada es la misma a la que tenemos hasheada
//  body('password').custom( (value, {req}) =>{
//      for (let i = 0; i < archivoUsuarios.length; i++) {
//          if (archivoUsuarios[i].email == req.body.email) {
//              if(bcrypt.compareSync(value, archivoUsuarios[i].password)){
//                return true;
//              }else{
//                return false;
//              }
//          }
//      }
//      
//  }).withMessage('Usurio o contraseña no coinciden'),
//] 

router.get('/registro', authMiddleware, userController.register); //u
router.post('/registro', validator, upload.single('avatar'), userController.save);
router.get('/login', authMiddleware,userController.login); //u
router.post('/login', userController.ingresar);
router.get('/logout', userController.logout);
router.get('/profile', authMiddleware, userController.profile);

module.exports = router;