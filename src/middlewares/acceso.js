const fs = require('fs');
const path = require('path');
let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usersBase.json')));

module.exports = (req,res,next) =>{
    //Variable locals (super global - vive en las vistas )
    res.locals.usuarioLogueado = false;
    res.locals.userType = false;
    if(req.session.usuarioLogueado){
        res.locals.usuarioLogueado = req.session.usuarioLogueado;
        if (req.session.usuarioLogueado.category == 0){
            res.locals.userType = true
        }
        return next();
    }else if(req.cookies.userEmail){
        let usuario = archivoUsuarios.find(usuario => usuario.email == req.cookies.userEmail)
        //return res.send(usuario);
        delete usuario.password;
        req.session.usuarioLogueado = usuario;
        res.locals.usuarioLogueado = usuario;
        if (req.session.usuarioLogueado.category == 0){
            res.locals.userType = true
        }
        return next();
    }else{
        return next();
    }
}