const db = require('../../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;


module.exports = {
//  list: (req, res) => {
//
//    db.Product.findAll()
//      .then(product => {
//        return res.status(200).json({
//          total: product.length,
//          data: product,
//          status: 200,
//          url: "api/products/list"
//        })
//      })
//
//  },

  show: (req, res) => {

    db.Product
      .findByPk(req.params.id)
      .then(products => {
        return res.status(200).json({

          data: products,
          status: 200
        })
      })

  },

  list : (req,res)=>{
    let products = db.Product.findAll( {include: [{association:"productcategory"}]})
    let categoria = db.ProductCategory.findAll({include:[{association:"product"}]})
    Promise
    .all([products, categoria])
    .then(([products,categoria])=>{
     
    //  let countByCategory = { }


      let Chocolate = products.filter(row => {
        return row.id_productcategory == 1
      })
      const Pasteleria = products.filter(row => {
        return row.id_productcategory == 2
      })
     
            let respuesta ={
                meta:{
                    status:200,
                    count:products.length,
                    url:"/api/products"
                },
                countByCategory: {
                  Chocolate : Chocolate.length ,
                  Pasteleria : Pasteleria.length ,
                },
                data: products
            }
          res.json(respuesta)
      })
      .catch(error => console.log(error))
    },



  store: (req, res) => {
    db.Product
      .create(req.body)
      .then(product => {
        return res.status(200).json({
          data: product,
          status: 200,
          created: "OK"
        })
      })
  },

  delete: (req, res) => {
    db.Product
      .destroy({
        where: { id: req.params.id }
      })
      .then(response => {
        return res.json(response)
      })
  },


  search: (req, res) => {

    db.Product
      .findAll({
        where: { 
          name: {[Op.like]: '%' + req.query.keyword + '%' }
      }
    })

      .then(product => {
        return res.status(200).json(product)
      })
  }
  //list: (req, res) =>{  
  //(esta es la de la clase)
  // db.Product.findAll()
  //     .then(product => {
  //         let response = {
  //             info: {
  //               total: product.length,
  //               status: 200,
  //               url: "api/products/list"
  //         }, 
  //        data: product,
  //       } res.json(response)
  //      })
  //            .catch(e=> {
  //                let response = {
  //                    info: {
  //                        status: 404,
  //                        url: "api/products/list",
  //                        error: e
  //                    },
  //                }
  //                res.json(response)
  //            })
  // },		
  //    show: (req, res) => {
  //  
  //      db.Product
  //      .findByPk(req.params.id)
  //      .then(products => {
  //         let products = {
  //              info: {
  //                  status: 200,
  //                  url: "api/products/detail" + req.params.id
  //                  },
  //                  data:
  //              } res.json(products)
  //          }) 
  //      },

}