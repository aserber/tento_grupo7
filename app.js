let express = require('express');
const res = require('express/lib/response');
const path = require('path'); 


let app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(3000, () => console.log("esto fue exitoso"));

app.get('/', function(req, res){
    let htmlPath = path.resolve(__dirname, './views/index.html');
    res.sendFile(htmlPath);
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
    let htmlPath = path.resolve(__dirname, './views/productosTortas.html');
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
})
