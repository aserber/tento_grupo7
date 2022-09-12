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
            .isLength({min: 8}).withMessage('Longitud mínima 2 caracteres'),
            
            body('last_name')
            .notEmpty().withMessage('El campo apellido no puede estar vacío')
            .isLength({min: 2}).withMessage('Longitud mínima 2 caracteres'),
            body('avatar').custom((value, {req}) =>{ // la imágen es opcional, pero si se carga tiene que ser jpg, jpeg, png ó gif
              let file = req.file;
              if(file){
                let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"]
                let fileExtension = path.extname(file.originalname);
                  if (!acceptedExtensions.includes(fileExtension)){
                    throw new Error("Extensión de imagen no valida")
                  }

              } else {
                req.file = { 
                  filename : 'default-admin.jpg'
                }
                return true
            }
        })
          ]}
        case 'register': {
            return [
                body('name')
                .notEmpty().withMessage('El campo nombre no puede estar vacío')
                .isLength({min: 2}).withMessage('Longitud mínima 2 caracteres'),
                
                body('last_name')
                .notEmpty().withMessage('El campo apellido no puede estar vacío')
                .isLength({min: 2}).withMessage('Longitud mínima 2 caracteres'),
               
                body('email')
                .notEmpty().withMessage('completar dirección de correo electrónico')
                .isEmail().withMessage('Agregar un email válido')
                .custom( async (value, {req}) => {    
                  await db.User.findOne({ where: {email: req.body.email }}).then(user => {
                        if (user)
                        throw new Error('El correo ya ha sido registrado, elije otro');
                  });
                }),
                body('password')
                .notEmpty().withMessage('la contraseña no puede estar vacía') 
                .isLength({min:8}).withMessage('la contraseña de be tener al menos 8 caracteres'),          
            
                
                body('avatar').custom((value, {req}) =>{ // la imágen es opcional, pero si se carga tiene que ser jpg, jpeg, png ó gif
                      let file = req.file;
                      if(file){
                        let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"]
                        let fileExtension = path.extname(file.originalname);
                          if (!acceptedExtensions.includes(fileExtension)){
                            throw new Error("Extensión de imagen no valida")
                          }

                      } else {
                        req.file = { 
                          filename : 'default-admin.jpg'
                        }
                        return true
                    }
                })

            ]
        }
    }

}