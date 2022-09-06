const multer = require("multer");
const path = require("path");

const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {
    cb(null, path.join(__dirname,"../../public/images/usuariosimg"));
    },
    filename: function(req, file, cb) {          
    let imageName = Date.now() + path.extname(file.originalname); 
    cb(null, imageName);         
    }
})

const fileFilter = (req, file, cb) => {
    if ((file.mimetype).includes("jpeg") || (file.mimetype).includes("png") || (file.mimetype).includes("jpg")) {
        console.log(file)
        cb(null, true);
    }
    else {
        console.log(file)
        cb(null, false)
        req.fileError = "ppp";
    }
}


const uploadFile = multer({
    fileFilter: fileFilter,
    storage: multerDiskStorage
})

module.exports = uploadFile;