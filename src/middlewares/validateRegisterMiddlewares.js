const path = require ("path");
const { body } = require("express-validator");

module.exports = [
    body("name").notEmpty().withMessage("Tenes que completar"),
    body("last_name").notEmpty().withMessage("Tenes que completar"),
    body("email").notEmpty().withMessage("Tenes que completar").bail().isEmail().withMessage("Formato de email invalido"),
    body("password").notEmpty().withMessage("Tenes que completar"),
    body("image").custom((value,{req}) => {
        let file = req.file;
        let acceptedExtensions = [".jpg",".png",".gif"];

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