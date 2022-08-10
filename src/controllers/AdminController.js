//delete-edit-create-destroy-store-update-search productos y usuarios

const { ResultWithContext } = require('express-validator/src/chain');
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

	detail: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let id = req.params.id
		let product = products.find(product => product.id == id)
		res.render('admin/detail', {
			product,
			toThousand
		})
	},
	// Update - Form to edit
	edit: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		res.render('admin/product-edit-form', { productToEdit })
	},

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
			image: req.file.filename,
		}
		console.log(newProduct)
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/');

	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
	},
	// Update - Method to update
	update: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id)

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: req.file.filename,
		};
		console.log(productToEdit);

		let indice = products.findIndex(producto => producto.id == id);
		products[indice] = productToEdit

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/');
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
}
module.exports = controller;