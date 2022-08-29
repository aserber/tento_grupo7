const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require('../database/models');
//const sequelize = db.sequelize;
//const { Op } = require('sequelize');
const moment = require('moment');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

	productCategory:  (req, res) => {
		let categoria = req.params.categoria
		let productsFiltered = products.filter(product => product.category == categoria)
		res.render('productos/producto', {
			productsArray : productsFiltered,
			category: categoria,
			toThousand
		})
	},

	//productCategory:  (req, res) => {
	//	let categoria = req.params.categoria
	//	let Chocolate = db.Product.findAll(function (products) {
	//		products.category =='Chocolate'
	//	})
	//	const Pasteleria =  db.Product.findAll(function (products) {
	//		 products.category =='Pasteleria'
	//	})
	//	db.Products.findOne(product => product.category == categoria)
	//	Promise
	//	.all([Chocolate, Pasteleria])
	//	.then (([Chocolate, Pasteleria]) => {
	//		res.render('productos/producto', 
	//			{ Pasteleria, Chocolate, toThousand })
	//		.catch(error => res.send(error))
	//	})
	//	
//
	//},

	
	

	
	//search: (req, res) => {
	//	let search = req.query.keywords;
	//	let productsToSearch = products.filter(product => product.name.toLowerCase().includes(search));	
	//	res.render('productos/detail', { 
	//		products: productsToSearch, 
	//		search,
	//		toThousand,
	//	});
	//},

	
	detail: (req, res) => {
		db.Product.findByPk(req.params.id,
			)
			.then(product =>{
				if (product == undefined){
				res.redirect('/admin/error')
			} else{
				res.render('productos/detail', {
				product,
				toThousand
			})
			}
		});
	},
	
}

module.exports = controller;