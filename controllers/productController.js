const productsFilePath = path.join(__dirname, '../data/product_data.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render ("products", {
			products,
			toThousand
		})
		
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let id = req.params.id
		let product = products.find(product => product.id == id)
		res.render ("detail", {
			product,
			toThousand
		})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render ("product-create-form")
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let newProduct = {
			id: products[ products.length -1 ].id +1,
			...req.body,
			image: "default-image.png"
		};
		products.push (newProduct)
		fs.writeFileSync (productsFilePath, JSON.stringify(products,null,""));
		res.redirect("/");
	},
}