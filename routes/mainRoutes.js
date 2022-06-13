const express = require('express');
const router = express.Router();

const mainControllers = require('../controllers/mainControllers');

router.get('/', mainControllers.index);

router.get('/registro', mainControllers.register);

router.get('/login', mainControllers.login);

module.exports = router;