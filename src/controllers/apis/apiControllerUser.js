const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');


module.exports = {
    list: (req, res) =>{

        db.User.findAll()
            .then(user => {
                return res.status(200).json({
                    total: user.length,
                    data: user,
                    status: 200,
                    url: "api/user/list"
                })
            })

        },		

    show: (req, res) => {

        db.User
        .findByPk(req.params.id)
        .then(users => {
           return res.status(200).json({
                data: users,
                status: 200
            })
        })

    },

      //   listByCat: (req, res) =>{
    //
    //    db.Product.findAll()
    //        .then(product => {
    //            let Chocolate = product.filter(row => {
    //                return row.id_productcategory == 1
    //            })
    //            const Pasteleria = product.filter(row => {
    //                return row.id_productcategory == 2
    //            })
    //            return res.status(200).json({
    //                total: product.length,
    //                data: Pasteleria, Chocolate
    //                status: 200
    //            })
    //        })
    //            res.render('admin/administrar', {
	//				Pasteleria,
	//				Chocolate,
	//				toThousand

	//			});
   ////    },

  
    }
   // store: (req, res) => {
   //     db.Product
   //     .create(req.body)
   //     .then(product => {
   //        return res.status(200).json({
   //             data: product,
   //             status: 200,
   //             created: "OK"
   //         })
   //     })
   // },

   // delete: (req, res) => {
   //     db.Product
   //     .destroy({
   //       where : {id: req.params.id} 
   //       })
   //     .then(response => {
   //        return res.json(response)
   //       })
   // },

  	
   //   search: (req, res) => {

   //       db.Product
   //       .findAll({
   //           where: {[Op.like] :'%'+ req.query.keyword + '%'}
   //       })
   //       .then(product =>{
  //        if (product.length > 0 ) {          
   //           return res.status(200).json(product)
   //       } 
   //           return res.status(200).json("no existen productos")
   //      })       
   //   }

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

