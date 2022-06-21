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

    list: (req, res) => {
        let users = [
            {id:1, name: "Dario"},
            {id:2, name: "Javier"},
            {id:3, name: "Maru"},
            {id:4, name: "Ale"},
            {id:5, name: "Alan"},
        ];
    res.render("userlist.ejs", {"users": users});
    },
    search: (req, res) => {
        let loQueBusco = req.query.search;
        let users = [
            {id:1, name: "Dario"},
            {id:2, name: "Javier"},
            {id:3, name: "Maru"},
            {id:4, name: "Ale"},
            {id:5, name: "Alan"},
        ];

        let usersResults= [];

        for (let i= 0; i<users.length; i++){
            if (users[i].name.includes(loQueBusco)){

                usersResults.push(users[i]);
            }
        } res.render("usersResults.ejs", {"usersResults": usersResults})

    },
    crear: (req, res) => {
        let usuario = {
            nombre: req.body.name,
            usuario: req.body.user,
            mail: req.body.email,
        }
    res.redirect("/users/list");
    },




//pruebas GET y PUT//

edit: (req, res) => {
    let idUser = req.params.idUser;

    let users = [
        {id:1, name: "Dario"},
        {id:2, name: "Javier"},
        {id:3, name: "Maru"},
        {id:4, name: "Ale"},
        {id:5, name: "Alan"},
    ];

    let userToEdit = users[idUser];

    res.render('userEdit', {userToEdit: userToEdit});
},



}

module.exports = controller;