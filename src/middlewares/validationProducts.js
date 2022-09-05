//const { body } = require("express-validator");
//const fs = require("fs");
//
//module.exports = [
//    body("name").notEmpty().withMessage("El nombre no puede estar vacio!").isLength({min:2, max:50}).withMessage("El nombre debe tener entre 2 y 50 caracteres"),
//    body("price").notEmpty().withMessage("El precio no puede estar vacio!").isFloat({min:1, max:10}).withMessage("Coloca el precio que desees."),
//    body("discount").notEmpty().withMessage("El descuento no puede estar vacio!").isInt({min:0}).withMessage("Coloca el descuento que desees."),
//    body("category").notEmpty().withMessage("La categoria no puede estar vacia!").isFloat({min:60}).withMessage("Elegi la categoria correspondiente."),
//    body("description").isDate().withMessage("La descripcion no puede estar vacia!"),
//    body("genre_id").notEmpty().withMessage("El genero no puede venir vacio!"),
//    body("imagen").custom((value, {req}) => {
//        let file = req.file
//        let acceptedExtensions = [".jpg", ".png", ".gif", ".jpeg"]
//
//        
//        if (file == undefined) {
//            throw new Error("Adjunte una image con formato: " + acceptedExtensions + " y peso máximo 10mb.")
//        }
//        else if (file.size > (1024 * 1024 * 10)) {
//            fs.unlink(file.path, (err) => {
//                if (err) {
//                    console.log(err)
//                }
//            })
//            throw new Error("Adjunte una image con formato: " + acceptedExtensions + " y peso máximo 10mb.")
//        }
//        return true
//    })
//
//]