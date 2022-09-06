const path = require ("path");
const { body } = require("express-validator");
const db = require('../database/models');

module.exports = [
 
    body("last_name")
        .notEmpty()
        .withMessage("Tenes que completar"),
    body("email")
        .notEmpty()
        .withMessage("Tenes que completar")
        .bail()
        .isEmail()
        .withMessage("Formato de email invalido"),
    body("password")
        .notEmpty()
        .withMessage("Tenes que completar"),
   //body("avatar")
   //    .custom((value,{req}) => {
   //    let file = req.file;
   //    let acceptedExtensions = [".jpg",".png",".gif",".jpeg"];

   //    if (!file){
   //       throw new Error("Subi una imagen");
   //    }else {
   //       let fileExtension= path.extname(file.originalname);
   //      if (!acceptedExtensions.includes(fileExtension)){
   //           throw new Error("Las extensiones compatibles son ${acceptedExtensions.join(",")}");
   //    }}
   //    return true
   //})  
];