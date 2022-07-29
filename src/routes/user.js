const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validator = require ("../middlewares/validateRegisterMiddlewares");
const path = require('path');
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../../public/images/usuariosimg'));
  },
  filename: function (req, file, cb) {
    cb(null, 'usuario-'+Date.now()+path.extname(file.originalname))
  }
})
 
const upload = multer({ storage })


router.get('/registro', userController.register); //u
router.post('/registro', validator.register, upload.single('avatar'), userController.save);
router.get('/login', userController.login); //u
router.get ('../profile/:userId', userController.profile);

router.get('/adminUsuarios', userController.administrarUsuarios)




/*
app.post('registrar', [
  body('nombre', 'Ingrese nombre completo')
  .exists()
  .isLength({min: 3}),
  body('apellido', 'Ingrese apellido completo')
  .exists()
  .isLength({min: 3}),
  body('email', 'Ingrese un email valido')
  .exists()
  .isEmail(),
  body('password', 'ingrese una contraseña correcta')
  .exists()
  .ispassword()
],(req, res) => { 

 hasta aca /*




  /* const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
      console.log(errors)
    } */

   /* sigue aca
    const errors = validationResult(req)
    if (!errors.isEmpty()) {  
      console.log(req.body)
      const valores = req.body
      const validaciones = errors.array()
      res.render('registro', {validaciones: validaciones, valores}) 
    }else {
      res.send('tu vieja')
    }
  }
   termina aca */




module.exports = router;