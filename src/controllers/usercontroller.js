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
    profile: (req,res) => {
        return res.render ("usuario/login");
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
		
		user.push(newUser);
   
		fs.writeFileSync(userFilePath, JSON.stringify(user, null, ' '));
		res.redirect('/');

	},
  administrarUsuarios: (req, res) => {
    const user = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
    res.render('usuario/usuariosRegistrados');
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