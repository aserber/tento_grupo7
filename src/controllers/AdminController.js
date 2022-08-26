//delete-edit-create-destroy-store-update-search productos y usuarios

const { ResultWithContext } = require('express-validator/src/chain');
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
//const db = require('../database/models');
//const sequelize = db.sequelize;
//const { Op } = require('sequelize');
//const moment = require('moment');
//const product = db.product;


const controller = {
	// Create - Form to create
	crear: (req, res) => {
		return res.render('admin/crear')
	},
	// Create -  Method to store
	store: (req, res) => {

		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let newProduct = {
			id: products[products.length - 1].id + 1,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image: req.file ? req.file.filename : '',
		}
		console.log(newProduct)
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/');

	},

	//	store: function(req,res){
	//		db.producto.create({ 
	//			id: products[products.length - 1].id + 1,
	//			name: req.body.name,
	//			price: req.body.price,
	//			discount: req.body.discount,
	//			category: req.body.category,
	//			description: req.body.description,
	//			image: req.file ? req.file.filename : '',
	//		})
	//		.then(()=> {
	//			return res.redirect('/')})            
    //   	.catch(error => res.send(error))
	//	},

	detail: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let id = req.params.id
		let product = products.find(product => product.id == id)
		res.render('admin/detail', {
			product,
			toThousand
		})
	},
	//db.product.findByPk(req.params.id,
	//	{
	//		include : ['product']
	//	})
	//	.then(product => {
	//		res.render('detail.ejs', {product});
	//	});
	//},




	// Update - Form to edit
	edit: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		res.render('admin/product-edit-form', { productToEdit })
	},

	//edit: (req, res) => {
	//
	//	let id = req.params.id
	//	let productToEdit = product.findByPk(id, {include: ["product", "productCategory"]})	
	//	.then(product => {
	//		res.render('admin/product-edit-form', { productToEdit });
	//	.catch(error => res.send(error))
	//},

	// Update - Method to update
	update: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id)
		

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: req.file ? req.file.filename : req.body.oldImagen,
		};
		let indice = products.findIndex(producto => producto.id == id);
		products[indice] = productToEdit

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/');
	},
	//update: function (req,res) {
    //    let productId = req.params.id;
    //    product.update(
    //        {
    //           id: productToEdit.id,
	//		...req.body,
	//		image: req.file ? req.file.filename : req.body.oldImagen,
	//	
    //        },
    //        {
    //            where: {id: productId}
    //        })
    //    .then(()=> {
    //        return res.redirect('/')})            
    //    .catch(error => res.send(error))
    //},
	


	// Delete - Delete one product from DB
	destroy: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
	},

	//destroy: function (req,res) {
    //    let productId = req.params.id;
    //    product
    //    .destroy({where: {id: productId}, force: true}) // force: true es para asegurar que se ejecute la acción
    //    .then(()=>{
    //        return res.redirect('/')})
    //    .catch(error => res.send(error)) 
    //},
	
	error: (req, res) => {
		return res.render('admin/error')
	},

	administrar: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let Chocolate = products.filter(function (products) {
			return products.category == 'Chocolate'
		})
		const Pasteleria = products.filter(function (products) {
			return products.category == 'Pasteleria'
		})
		res.render('admin/administrar', {
			Pasteleria,
			Chocolate,
			toThousand
		});
	},

	//administrar: (req, res) => {
	//	db.product.findAll()
	//	.then(products => {
	//	let Chocolate = products.filter(function (products) {
	//		return products.category == 'Chocolate'
	//	})
	//	const Pasteleria = products.filter(function (products) {
	//		return products.category == 'Pasteleria'
	//	})
	//	res.render('admin/administrar', {
	//		Pasteleria,
	//		Chocolate,
	//		toThousand
	//	});
	//		
	//},
}
module.exports = controller;