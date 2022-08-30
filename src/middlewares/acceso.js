const fs = require('fs');
const path = require('path');
const db = require('../database/models');
let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usersBase.json')));

module.exports = (req,res,next) =>{
    //Variable locals (super global - vive en las vistas )
  
    res.locals.usuarioLogueado = false;
    res.locals.userType = false;
    if(req.session.usuarioLogueado){
        res.locals.usuarioLogueado = req.session.usuarioLogueado;
        if (req.session.usuarioLogueado.id_usercategory == 0){
            res.locals.userType = true
        }
        return next();
    }else if(req.cookies.userEmail){
        db.User.findOne({where: {email: req.cookies.userEmail}})
        //return res.send(usuario);
        .then((usuario) => {
            delete usuario.password;
            req.session.usuarioLogueado = usuario;
            res.locals.usuarioLogueado = usuario;
            if (req.session.usuarioLogueado.id_usercategory == 0){
                res.locals.userType = true
            }
        })
    }
    return next();

}