const path = require ("path");
const { body } = require("express-validator");
const db = require('../database/models');

module.exports = [
    body("name")
        .notEmpty()
        .withMessage("Tenes que completar"),
    body("last_name")
        .notEmpty()
        .withMessage("Tenes que completar"),
    body("email")
        .notEmpty()
        .withMessage("Tenes que completar")
        .bail()
        .isEmail()
        .withMessage("Formato de email invalido")
        .custom( async (value, {req}) => {   
            await db.User.findOne({ where: {email: req.body.email }})
            .then(user => {
              if (user)
              throw new Error('El correo ya ha sido registrado, elije otro');
        });
      }),

    body("password")
        .notEmpty()
        .withMessage("Tenes que completar"),
    body("avatar")
        .custom((value,{req}) => {
        let file = req.file;
        let acceptedExtensions = [".jpg",".png",".gif",".jpeg"];

        if (!file){
           throw new Error("Subi una imagen");
        }else {
           let fileExtension= path.extname(file.originalname);
          if (!acceptedExtensions.includes(fileExtension)){
               throw new Error("Las extensiones compatibles son ${acceptedExtensions.join(",")}");
        }}
        return true
    })  
];