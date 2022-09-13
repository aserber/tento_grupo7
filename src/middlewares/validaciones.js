const path = require('path');
const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const Op = db.Sequelize.Op;


module.exports.validar = (method) => {
    switch(method){
      case 'update': {
        return [
            body('name')
            .notEmpty().withMessage('El campo nombre no puede estar vacío')
            .isLength({min: 2}).withMessage('Mìnimo 2 caracteres'),
            
            body('last_name')
            .notEmpty().withMessage('El campo apellido no puede estar vacío')
            .isLength({min: 2}).withMessage('Mìnimo 2 caracteres'),
            
            body("avatar").custom((value, {req}) => {
              let file = req.file
              let acceptedExtensions = [".jpg", ".png", ".gif", ".jpeg"]
      
              
              if (file == undefined) {
                  throw new Error("Adjunte una image con formato: " + acceptedExtensions + " y peso máximo 10mb.")
              }
              else if (file.size > (1024 * 1024 * 10)) {
                  fs.unlink(file.path, (err) => {
                      if (err) {
                          console.log(err)
                      }
                  })
                  throw new Error("Adjunte una image con formato: " + acceptedExtensions + " y peso máximo 10mb.")
              }
              return true
          })
          ]}
        case 'register': {
            return [
                body('name')
                .notEmpty().withMessage('El campo nombre no puede estar vacío')
                .isLength({min: 2}).withMessage('Mìnimo 2 caracteres'),
                
                body('last_name')
                .notEmpty().withMessage('El campo apellido no puede estar vacío')
                .isLength({min: 2}).withMessage(' Mìnimo 2 caracteres'),
               
                body('email')
                .notEmpty().withMessage('completar dirección de correo electrónico')
                .isEmail().withMessage('Agregar un email válido')
                .custom( async (value, {req}) => {    
                  await db.User.findOne({ where: {email: req.body.email }}).then(user => {
                        if (user)
                        throw new Error('El correo ya existe. Debes elegir otro');
                  });
                }),
                body('password')
                .notEmpty().withMessage('la contraseña no puede estar vacía') 
                .isLength({min:8}).withMessage('la contraseña debe tener al menos 8 caracteres'),          
            
                
                body("avatar").custom((value, {req}) => {
                  let file = req.file
                  let acceptedExtensions = [".jpg", ".png", ".gif", ".jpeg"]
          
                  
                  if (file == undefined) {
                      throw new Error("Adjunte una image con formato: " + acceptedExtensions + " y peso máximo 10mb.")
                  }
                  else if (file.size > (1024 * 1024 * 10)) {
                      fs.unlink(file.path, (err) => {
                          if (err) {
                              console.log(err)
                          }
                      })
                      throw new Error("Adjunte una image con formato: " + acceptedExtensions + " y peso máximo 10mb.")
                  }
                  return true
              })

            ]
        }
    }

}