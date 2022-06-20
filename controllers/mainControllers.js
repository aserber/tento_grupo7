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

    list: (req, res)=> {
        let users = [
            {id: 1, name: 'Dario'},
            {id: 2, name: 'Javier'},
            {id: 3, name: 'Maru'},
            {id: 4, name: 'Ale'},
            {id: 5, name: 'Alan'},
        ];

        res.render('users', {users: users});
    },


index2: (req, res) => {
    return res.render('index2.ejs');
},

 search1: (req, res) => {
    let loQueBuscoElUsuario = req.query.search1;
    let users = [
        {id: 1, name: 'Dario'},
        {id: 2, name: 'Javier'},
        {id: 3, name: 'Maru'},
        {id: 4, name: 'Ale'},
        {id: 5, name: 'Alan'},
    ];



let usersResults = [];

for(let i = 0; i < users.length; i++){
    if  (users[i].name.includes(loQueBuscoElUsuario)) {
        usersResults.push(users[i]);
    }
}

res.render('usersResults', {usersResults: usersResults})

},

create: function(req, res){
    let usuario = {
        nombre: req.body.nombre,
        edad: req.body.edad,
        email: req.body.email,
        // guardar
    }
   
    res.redirect("/users/list");
}

};

module.exports = controller;