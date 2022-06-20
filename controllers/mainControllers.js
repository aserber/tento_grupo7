// const { search } = require("../routes/mainRoutes");

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


//pruebas//
    list: function(req,res){
        let users = [
            {id: 1, name: "Dario"},
            {id: 2, name: "javier"},
            {id: 3, name: "maru"},
            {id: 4, name: "ale"},
        ];
        res.render ("userList", {"users": users})
    }



};

module.exports = controller;