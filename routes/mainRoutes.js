const express = require('express');
const router = express.Router();
//const multer = require('multer');
const path = require('path');
const mainControllers = require('../controllers/mainControllers');
//const uploadFile = multer({ storage });
//const storage = multer.diskStorage({ 
//    destination: function (req, file, cb) { 
//     cb(null, './public/images/productonuevo'); 
//    }, 
//    filename: function (req, file, cb) { 
//       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
//  })


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

//router.post('/productostortas', mainControllers.productostortas);//
//router.post('/register', uploadFile.single('avatar'), usersController.create);//
//pruebas//

router.get('/list', mainControllers.list);
router.get('/search',mainControllers.search);
router.post('/register', mainControllers.crear);
//sprint4//





//pruebas GET y PUT//

router.get('/edit/:idUser', mainControllers.edit);

router.put('/edit/:idUser', function(req, res){
    res.send('fui por PUTo');
})

module.exports = router;