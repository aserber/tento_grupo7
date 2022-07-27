// ************ Require's ************
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
//const session = require('express-session');

// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
//app.use(session({secret: 'Es un secreto' }));

// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas



// ************ WRITE YOUR CODE FROM HERE ************
// ************ Route System require and use() ************
const mainRouter = require('./routes/main'); // Rutas main
const productsRouter = require('./routes/productos'); // Rutas productos
const userRouter = require('./routes/user'); // Rutas usuarios
const adminRouter = require('./routes/admin'); // Rutas admin

//const logMiddleware = require('./middlewares/logMiddleware'); // Middleware de logs a la pagina

app.use('/', mainRouter); //(web) home-index
app.use('/usuario', userRouter); //usuarios
app.use('/productos', productsRouter); //productos
app.use('/admin', adminRouter); //administracion


//app.use(logMiddleware); // app.use del Middleware de log a la pagina



// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************
  //app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
  //app.use((err, req, res, next) => {
  // set locals, only providing error in development
   // res.locals.message = err.message;
   // res.locals.path = req.path;
   // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
   // res.status(err.status || 500);
   // res.render('/views/web/error');
  //});

// ************ exports app - dont'touch ************
module.exports = app;





// Rutas
/* const groupsRouter = require('./routes/groups');

app.get('/', (req, res) => {
    res.redirect('/groups/')
});
app.use('/groups', groupsRouter);
*/


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

