const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const userFilePath = path.join(__dirname, '../data/usersBase.json');
const { validationResult } = require('express-validator');

const controller = {
  register: (req, res) => {
    return res.render('usuario/registro');
  },
  login: (req, res) => {
    return res.render('usuario/login');
  },

  save: (req, res) => {
    const user = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
    let newUser = {
      id: user[user.length - 1].id + 1,
      name: req.body.name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      category: 1,
      image: req.file ? req.file.filename : '',
    }

    console.log(newUser)
    user.push(newUser);
    fs.writeFileSync(userFilePath, JSON.stringify(user, null, ' '));
    res.redirect('./login');
  },

  ingresar: (req, res) => {
    const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
    let usuario= users.find(user => user.email == req.body.email )
    if (usuario){
      let passOk = bcrypt.compareSync(req.body.password, usuario.password)
      if (passOk){
        delete usuario.password
        req.session.usuarioLogueado = usuario
        res.cookie("userEmail", req.body.email, {maxAge: 500 * 60 * 60})
        if(req.body.recordarme){
          res.cookie("userEmail", req.body.email, {maxAge: 1000 * 60 * 60})
        }
        res.redirect ("/");
      } else {
        return res.render ("usuario/login", {
          errors: {
            datosMal: {
              msg: "Las credenciales son inválidas"
            }
          }
        })
      } 
    } else {
        return res.render ("usuario/login", {
        errors: {
          datosMal: {
            msg: "Las credenciales son inválidas"
          }
        }
      })
    } 
    
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
