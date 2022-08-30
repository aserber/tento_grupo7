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

	//productCategory:  (req, res) => {
	//	let categoria = req.params.categoria
	//	let productsFiltered = products.filter(product => product.category == categoria)
	//	res.render('productos/producto', {
	//		productsArray : productsFiltered,
	//		category: categoria,
	//		toThousand
	//	})
	//},

	productCategory:  (req, res) => {

		db.Product.findAll()
			.then(product => {
				let producto = product.filter(row => {
					return row.id_productcategory == 1
				})
				
				res.render('productos/producto', {
					Pasteleria,
					category: categoria,
					toThousand

					
				});
			})
	},
	
	
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