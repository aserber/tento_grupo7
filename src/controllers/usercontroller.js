const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
//const userFilePath = path.join(__dirname, '../data/usersBase.json');
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
    let errors = validationResult(req);
    console.log("errores: " + errors.array())
    console.log(req.body.name)
    if (errors.isEmpty()) {
    db.User.create({
      name: req.body.name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password, 10),
      id_usercategory: 0,
      avatar: req.file ? req.file.filename : '',
    })
      .then((usuario) => {
        console.log(bcryptjs.compareSync(req.body.password, usuario.password))
        return res.redirect('./login')
      })

      .catch(error => res.send(error))
  } },




  ingresar: (req, res) => {

    db.User.findOne({
      where: { email: req.body.email }
    }).then((usuario) => {
      if (usuario) {
        let passOk = bcryptjs.compareSync(req.body.password.toString(), usuario.password.toString())
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
  edit: (req, res) => {

		let id = req.params.id
    let userToEdit = db.User.findByPk(id)
      Promise
      .all([userToEdit])	
      .then(([userToEdit]) => {
	  			res.render('usuario/userEdit', { userToEdit })
		  	})
			.catch(error => res.send(error))
	},
 
	// Update - Method to update


	update: (req, res) => {
		let usuario = {
			...req.body,
			avatar: req.file ? req.file.filename : req.body.oldImagen,
		}

		db.User.update(usuario, { where: { id: req.params.id } })
			.then(() => {
        
				return res.render('web/home')
			})
			.catch(error => res.send(error))
	},


  logout: (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    return res.render("web/home");
  }

}
module.exports = controller;