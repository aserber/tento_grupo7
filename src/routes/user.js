const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validator = require ("../middlewares/validateRegisterMiddlewares");



router.get('/registro', userController.register); //u
router.post('/registro', validator.register , userController.save);
router.get('/login', userController.login); //u
router.get ('../profile/:userId', userController.profile);






/*router.post('registrar', [
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
    /* const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        console.log(errors)
      } */
  
      const errors = validationResult(req)
      if (!errors.isEmpty()) {  
        console.log(req.body)
        const valores = req.body
        const validaciones = errors.array()
        res.render('registro', {validaciones: validaciones, valores}) 
      }else {
        res.send('tu vieja')
      }
  }) 
  




module.exports = router;