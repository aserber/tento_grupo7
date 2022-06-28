const express = require('express');
const app = express();
const mainRoutes = require('./routes/mainRoutes');

const res = require('express/lib/response');
const path = require('path'); 
const methodOverride = require ('method-override');
const publicPath = path.resolve(__dirname, './public');

app.listen(process.env.PORT || 7000, function () {
    console.log('Servidor corriendo, levantando pagina en el el puerto 7000. Si, lo cambie, ¿Y que?');
})
app.set('view engine', 'ejs'); 
app.use('/', mainRoutes);
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(publicPath));
app.use ((req,res, next)=>{
    res.status(404).render("not-found");
})






















/*app.get('/', function(req, res){
    let htmlPath = path.resolve(__dirname, './views/index.html');
    res.sendFile(htmlPath);
})

app.get('/index', function(req, res){
    let htmlPath = path.resolve(__dirname, './views/index.html');
    res.render(htmlPath);
})

app.get('/login', function(req, res){
    let htmlPath = path.resolve(__dirname, './views/login.html');
    res.sendFile(htmlPath);
})

app.get('/compras', function(req, res){
    let htmlPath = path.resolve(__dirname, './views/compras.html');
    res.sendFile(htmlPath)
})

app.get('/index', function(req, res){
    let htmlPath = path.resolve(__dirname, './views/index.html');
    res.sendFile(htmlPath);
})

app.get('/registro', function(req, res){
    let htmlPath = path.resolve(__dirname, './views/registro.html');
    res.sendFile(htmlPath)
})

app.get('/producto', function(req, res){
    let htmlPath = path.resolve(__dirname, './views/producto.html');
    res.sendFile(htmlPath)
})
app.get('/productostortas', function(req, res){
    let htmlPath = path.resolve(__dirname, './views/productostortas.html');
    res.sendFile(htmlPath)
})

app.get('/inicio', function(req, res){
    let htmlPath = path.resolve(__dirname, './views/index.html');
    res.sendFile(htmlPath);
})

app.get('/carrito', function(req, res){
    let htmlPath = path.resolve(__dirname, './views/carrito.html');
    res.sendFile(htmlPath);
})

app.get('/descproducto', function(req, res){
    let htmlPath = path.resolve(__dirname, './views/descproducto.html');
    res.sendFile(htmlPath);
})*/

