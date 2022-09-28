//delete-edit-create-destroy-store-update-search productos y usuarios

const { ResultWithContext } = require('express-validator/src/chain');
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');
const moment = require('moment');
const { validationResult } = require('express-validator');

const controller = {
	
	crear: function (req, res) {
		db.ProductCategory.findAll()
			
			.then((prodCat) => {
				return res.render(( 'admin/crear'), { prodCat })
			})
			.catch(error => res.send(error))
	},


	store: (req, res) => {
        const resultValidation = validationResult(req);
        db.ProductCategory.findAll()
            .then((prodCat) => {
                if (resultValidation.errors.length>0) {
                    res.render('admin/crear', {prodCat: prodCat, errors: resultValidation.mapped()})
                }
                else {
                    let producto = {
                        name: req.body.name,
						price: req.body.price,
						discount: req.body.discount,
						id_productcategory: req.body.category,
						description: req.body.description,
						image: req.file ? req.file.filename : '',
                     
                    }
					fs.copyFileSync(path.resolve(__dirname, '../../public/images/products/' + producto.image ), path.resolve(__dirname,"../../dashboard2/src/assets/images" + producto.image))
                    
					db.Product.create(producto)
                    .then(() => {
						return res.render('web/home')
					})
                }
            })
			
    },

	detail: (req, res) => {
		db.Product.findByPk(req.params.id,
		)
			.then(product => {
				res.render('admin/detail', {
					product,
					toThousand
				});
			});
	},




	// Update - Form to edit


	edit: (req, res) => {

		let id = req.params.id
		let productToEdit = db.Product.findByPk(id)
		let prodCate = db.ProductCategory.findAll()
		Promise
			.all([productToEdit,prodCate])
			.then(([productToEdit,prodCate]) => {
				return res.render('admin/product-edit-form', { productToEdit, prodCate })
			})
			.catch(error => res.send(error))
	},


	// Update - Method to update




	update: (req, res) => {
		const resultValidation = validationResult(req);
		let id = req.params.id
		let productToEdit = db.Product.findByPk(id)
		let prodCate = db.ProductCategory.findAll()
		Promise
		.all([productToEdit,prodCate])
		.then(([productToEdit,prodCate]) => {
                if (resultValidation.errors.length>0) {
                    res.render ('admin/product-edit-form', {productToEdit, prodCate, errors: resultValidation.mapped()})
					console.log(resultValidation)
                }
                else {
					let producto = {
						...req.body,
					image: req.file ? req.file.filename : req.body.oldImagen,
				}
				console.log (producto.id_productcategory),
				db.Product.update(producto, { where: { id: req.params.id } })	
				.then(() => {
					return res.render('web/home')
					})				
				}
			})
			
		},
	// Delete - Delete one product from DB


	destroy: function (req, res) {
		let productId = req.params.id;
		db.Product
			.destroy({ where: { id: productId }, force: true }) // force: true es para asegurar que se ejecute la acción
			.then(() => {
				return res.redirect('/')
			})
			.catch(error => res.send(error))
	},

	error: (req, res) => {
		return res.render('admin/error')
	},


	administrar: (req, res) => {

		db.Product.findAll()
			.then(product => {
				let Chocolate = product.filter(row => {
					return row.id_productcategory == 1
				})
				const Pasteleria = product.filter(row => {
					return row.id_productcategory == 2
				})
				
				res.render('admin/administrar', {
					Pasteleria,
					Chocolate,
					toThousand

				});
			})
	},


}
module.exports = controller;