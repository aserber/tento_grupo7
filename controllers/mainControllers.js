const controller = {
    index: (req, res) => {
        return res.render('index');
    },
    register: (req, res) => {
        return res.render('registro.ejs');
    },
    login: (req, res) => {
        return res.render('login.ejs');
    },

    productostortas: (req, res) => {
        return res.render('productostortas.ejs');
    },

    producto: (req, res) => {
        return res.render('producto.ejs');
    },
    
    compras: (req, res) => {
        return res.render('compras.ejs');
    },

    carrito: (req, res) => {
        return res.render('carrito.ejs');
    },

    descproducto: (req, res) => {
        return res.render('descproducto.ejs');
    },

    adminproduc: (req, res) => {
        return res.render('adminproduc.ejs');
    },

    list: (req, res)=> {
        let users = [
            'Dario',
            'Javier',
            'Maru',
            'Ale'
        ];

        return res.render('users', {users: users});
    },


index2: (req, res) => {
    return res.render('index2.ejs');
}
}

module.exports = controller;