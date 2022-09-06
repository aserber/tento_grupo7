const express = require('express');
const router = express.Router();
const adminController = require ("../controllers/adminController");
const path = require('path');
const multer = require('multer');
const uploadFile = require('../middlewares/multerMiddleware')
const validationProducts = require('../middlewares/validationProducts')


/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', adminController.edit); 
router.post('/detail/:id',uploadFile.single('imagen'), adminController.update);
/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', adminController.destroy); 
/*** CREATE ONE PRODUCT ***/ 
router.get('/crear', adminController.crear); 
router.post('/crear',uploadFile.single('imagen'),validationProducts, adminController.store); 
/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', adminController.detail); 
router.get("/administrar", adminController.administrar);

router.get("/error",adminController.error)
module.exports = router;