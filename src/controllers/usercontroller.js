const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
//const multer = require('multer');
const { validationResult } = require('express-validator');
const User = require ("../database/models/User");
const userFilePath = path.join(__dirname, '../data/usersBase.json');
const controller = {
    register: (req, res) => {
        return res.render('usuario/registro');
    },
    login: (req, res) => {  
        return res.render('usuario/login');
    },


    loginProcess: (req,res) => {
      let userToLogin = User.findByField('email', req.body.email);
      
      if(userToLogin) {
        let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.password);
          if (isOkThePassword){
            delete userToLogin.password;
            req.session.UserLogged = userToLogin;
            return res.redirect('/usuario/profile');
          }
          return res.render('usuario/login', {
            errors: {
              email: {
                msg: 'Las credenciales son invalidas'
              }
            }
          })
      }

      return res.render('usuario/login', {
        errors: {
          email: {
            msg: 'No se encuentra este email en nuestra base de datos'
          }
        }
      })
    },



    profile: (req,res) => {
        return res.render ("usuario/login", {
          user: req.session.UserLogged
        });
    },
    	save: (req, res) => {
		const user = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
		let newUser = {
			id: user[user.length - 1].id + 1,
			name: req.body.name,
			last_name: req.body.last_name,
			email: req.body.email,
            password: bcrypt.hashSync(req.body.password,10),
			category: 1,
      image: req.file.filename,
		}
		console.log(newUser)
		user.push(newUser);
		fs.writeFileSync(userFilePath, JSON.stringify(user, null, ' '));
		res.redirect('/');
	},
  logout: (req, res) => {
    req.session.destroy();
    return res.redirect('/');
  }
    //processRegister: (req,res) => {
      //  const resultValidation = validationResult(req);
        //if(resultValidation.errors.length > 0) {
          // return res.render ("usuario/registro", {
            //errors: resultValidation.mapped(),
              //oldData: req.body
           // });
        //}   
        //let userToCreate = {
         //   ...req.body,
          //  avatar: req
       // }
         //   User.create(req.body);
           // return res.send ("ok");
     //}
}
module.exports = controller;
//create  logout show 