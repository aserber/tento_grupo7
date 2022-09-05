const express = require('express');
const router = express.Router();
const adminController = require ("../controllers/adminController");
const path = require('path');
const multer = require('multer');
const uploadFile = require('../middlewares/multerMiddleware')
const validacion = require('../middlewares/validationProducts')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/products'));
    },
    filename: function (req, file, cb) {
      cb(null, 'producto-'+Date.now()+path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage })
/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', adminController.edit); 
router.patch('/detail/:id',upload.single('imagen'), adminController.update);
/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', adminController.destroy); 
/*** CREATE ONE PRODUCT ***/ 
router.get('/crear', adminController.crear); 
router.post('/crear',upload.single('imagen'), validacion,adminController.store); 
/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', adminController.detail); 
router.get("/administrar", adminController.administrar);

router.get("/error",adminController.error)
module.exports = router;