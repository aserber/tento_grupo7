// ************ Require's ************

const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require("express-session");
const acceso = require("./middlewares/acceso")
// ************ express() - (don't touch) ************
const app = express();
const guestMiddleware = require('./middlewares/guest');

// ************ Middlewares - (don't touch) ************
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(session({secret: 'Es un secreto' }));
app.use(acceso);

// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas



// ************ WRITE YOUR CODE FROM HERE ************
// ************ Route System require and use() ************
const mainRouter = require('./routes/main'); // Rutas main
const productsRouter = require('./routes/productos'); // Rutas productos
const userRouter = require('./routes/user'); // Rutas usuarios
const adminRouter = require('./routes/admin'); // Rutas admin


app.use('/', mainRouter); //(web) home-index
app.use('/usuario', userRouter); //usuarios
app.use('/productos', productsRouter); //productos
app.use('/admin',guestMiddleware, adminRouter); //administracion


module.exports = app;

