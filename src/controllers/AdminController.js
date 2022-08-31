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


const controller = {
	// Create - Form to create
	//	crear: (req, res) => {
	//		return res.render('admin/crear')
	//	},
	crear: function (req, res) {
		db.ProductCategory.findAll()
			
			.then((prodCat) => {
				return res.render(( 'admin/crear'), { prodCat })
			})
			.catch(error => res.send(error))
	},

	store: function (req, res) {
		db.Product.create({

			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			id_productcategory: req.body.category,
			description: req.body.description,
			image: req.file ? req.file.filename : '',
		})
			.then(() => {
				return res.redirect('/')
			})
			.catch(error => res.send(error))
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
		//let prodCate = db.ProductCategory.findAll()
		Promise
			.all([productToEdit])
			.then(([productToEdit]) => {
				res.render('admin/product-edit-form', { productToEdit })
			})
			.catch(error => res.send(error))
	},

	// Update - Method to update


	update: (req, res) => {
		let producto = {
			...req.body,
			image: req.file ? req.file.filename : req.body.oldImagen,
		}

		db.Product.update(producto, { where: { id: req.params.id } })
			.then(() => {
				return res.redirect('/')
			})
			.catch(error => res.send(error))
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