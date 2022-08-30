const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const userFilePath = path.join(__dirname, '../data/usersBase.json');
const { validationResult } = require('express-validator');
//const { where } = require('sequelize/types');
const db = require('../database/models');

const controller = {
  register: (req, res) => {
    return res.redirect('usuario/registro');
  },
  login: (req, res) => {
    return res.render('usuario/login');
  },

  save: (req, res) => {
    db.User.create({
      name: req.body.name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password, 10),
      id_usercategory: 0,
      avatar: req.file ? req.file.filename : '',
    })
      .then((usuario) => {
        console.log(usuario.password)
        console.log(req.body.password)
        console.log(bcryptjs.compareSync(req.body.password, usuario.password))
        return res.redirect('./login')
      })

      .catch(error => res.send(error))
  },




  ingresar: (req, res) => {

    db.User.findOne({
      where: { email: req.body.email }
    }).then((usuario) => {
      if (usuario) {
        let passOk = bcryptjs.compareSync(req.body.password.toString(), usuario.password.toString())
        console.log(usuario.password)
        console.log(req.body.password)
        console.log(bcryptjs.compareSync(req.body.password, usuario.password))
        if (passOk) {
          delete usuario.password
          req.session.usuarioLogueado = usuario
          res.cookie("userEmail", req.body.email, { maxAge: 300 * 60 * 60 })
          if (req.body.recordarme) {
            res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 60 })
          }
          res.redirect("/");
        } else {
          return res.render("usuario/login", {
            errors: {
              datosMal: {
                msg: "Las credenciales son inválidas"
              }
            }
          })
        }
      } else {
        return res.render("usuario/login", {
          errors: {
            datosMal: {
              msg: "Las credenciales son inválidas"
            }
          }
        })
      }
    })
  },
  profile: (req, res) => {
    return res.render('usuario/profile', {
      usuario: req.session.usuarioLogueado
    });

  },
  logout: (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    return res.render("web/home");
  }

}
module.exports = controller;