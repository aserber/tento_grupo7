const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');


module.exports = {
    list: (req, res) =>{

        db.User.findAll()
            .then(users => {
                return res.status(200).json({
                    total: users.length,
                    data: users,
                    status: 200,
                    //url: "api/user/list"
                })
            })

        },		

    show: (req, res) => {

        db.User.findByPk(req.params.id)
        .then(user => {
           return res.status(200).json({
                    data: user,
                    status: 200,
            })
        })

    },

  
    
    store: (req, res) => {
        db.User
        .create(req.body)
        .then(user => {
           return res.status(200).json({
                data: user,
                status: 200,
                created: "OK"
            })
        })
    },

    delete: (req, res) => {
        db.User
        .destroy({
            where: {id: req.params.id }
          })
        .then(response => {
           return res.json(response)
          })
    },

    

  	
   search: (req, res) => {
       db.User
       .findAll({
           where: {[Op.like] :'%'+ req.query.keyword + '%'}
       })
       .then(users =>{
           return res.status(200).json(users)
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