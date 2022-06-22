const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const mainControllers = require('../controllers/mainControllers');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../public/groupsImages'))
    },
    filename: (req, file, callback) => {
        const newFileName = 'group-' + Date.now() + path.extname(file.originalname);
        callback(null, newFileName);
    }
})
const upload = multer({storage});



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
//sprint4//

router.get('/products', controlador.list);
router.get('/create',controlador.create);
router.get('/id',controlador.id);
router.post('/products',controlador.crear);
router.get('/edit',controlador.edit);
router.put('/id',controlador.editar);
router.delete('/id',controlador.borrar);


//pruebas GET y PUT//

router.get('/edit/:idUser', mainControllers.edit);

router.put('/edit/:idUser', function(req, res){
    res.send('fui por PUTo');
})

module.exports = router;