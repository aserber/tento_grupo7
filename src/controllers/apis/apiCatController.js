const db = require('../../database/models');
const sequelize = db.sequelize;
const Op  = db.Sequelize.Op;

module.exports = {
    list:(req,res)=>{
        db.ProductCategory.findAll()
        .then(categorias=>{
            let respuesta = {
                meta :{
                    status:200,
                    count : categorias.length,
                    url:"/api/categorias"
                },
                data:categorias
            }
            
            res.json(respuesta)
        })
        .catch(error => console.log(error))
    }
}