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
router.post('/login', userController.loginProcess);

router.get ('/profile/', userController.profile);


module.exports = router;