const db = require('../../database/models');
const sequelize = db.sequelize;
const Op  = db.Sequelize.Op;

module.exports = {
    //list:(req,res)=>{
    //    
    //    db.ProductCategory.findAll()
    //    .then(categorias=>{
    //        let respuesta = {
    //            meta :{
    //                status:200,
    //                count : categorias.length,
    //                url:"/api/categorias"
    //            },
    //            data:categorias
    //        }
    //        
    //        res.json(respuesta)
    //    })
    //    .catch(error => console.log(error))
    //}

    list:(req,res)=>{
        
        let products = db.Product.findAll( {include: [{association:"productcategory"}]})
        let categoria = db.ProductCategory.findAll({include:[{association:"product"}]})
        Promise
        .all([products, categoria])
        .then(([products,categoria])=>{
            let respuesta = {
                meta :{
                    status:200,
                    count : categoria.length,
                    count : products.length,
                    url:"/api/categorias"
                },
                data: categoria
            }
            
            res.json(respuesta)
        })
        .catch(error => console.log(error))
    }
}

