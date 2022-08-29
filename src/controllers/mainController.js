const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let Chocolate = products.filter(function(products){
    return products.category == 'Chocolate'
})
const Pasteleria = products.filter(function(products){
    return products.category == 'Pasteleria'
})


const controller = {
	home: (req, res) => {
        return res.render('web/home');
    },

	//index: (req, res) => {
	//	res.render('web/index', {
	//		Pasteleria,
	//		Chocolate,
	//		toThousand
	//	});
	//},

    index: (req, res) =>{
	 db.Product.findAll()
		.then(product => {
			res.render('web/index', {product})
		})
	},

	
	carrito: (req, res) => {
        return res.render('web/carrito');
    },

    compras: (req, res) => {
        return res.render('./web/compras');
    },

	nosotros: (req, res) => {
        return res.render('web/nosotros');
    },
	accesodenegado: (req, res) => {
        return res.render('web/accesodenegado');
    },
	faq: (req, res) => {
        return res.render('web/faq');
    },
};



module.exports = controller;
