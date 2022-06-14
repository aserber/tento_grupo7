const controller = {
    index: (req, res) => {
        return res.render('index');
    },
    register: (req, res) => {
        return res.render('registro.ejs');
    },
    login: (req, res) => {
        return res.render('Login');
    },

    productostortas: (req, res) => {
        return res.render('productostortas');
    },

    producto: (req, res) => {
        return res.render('producto');
    },
    
    compras: (req, res) => {
        return res.render('compras');
    },

    carrito: (req, res) => {
        return res.render('carrito');
    },

    carrito: (req, res) => {
        return res.render('carrito');
    },

    descproducto: (req, res) => {
        return res.render('descproducto');
    },

    adminproduc: (req, res) => {
        return res.render('adminproduc');
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
    return res.render('index2');
}
}

module.exports = controller;