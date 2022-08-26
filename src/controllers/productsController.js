const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


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

	
	search: (req, res) => {
		let search = req.query.keywords;
		let productsToSearch = products.filter(product => product.name.toLowerCase().includes(search));	
		res.render('productos/detail', { 
			products: productsToSearch, 
			search,
			toThousand,
		});
	},

	detail: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let id = req.params.id
		let product = products.find(product => product.id == id)
		if (product == undefined){
			res.redirect('/admin/error')
		} else{
			res.render('productos/detail', {
			product,
			toThousand
		})}
	},
	
	
	

}

module.exports = controller;