const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validator = require ("../middlewares/validateRegisterMiddlewares");



router.get('/registro', userController.register); //u
router.post('/registro', validator.register , userController.save);
router.get('/login', userController.login); //u
router.get ('../profile/:userId', userController.profile);

module.exports = router;