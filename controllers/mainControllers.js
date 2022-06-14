const controller = {
    index: (req, res) => {
        return res.render('index.ejs');
    },
    register: (req, res) => {
        return res.render('registro.ejs');
    },
    login: (req, res) => {
        return res.send('Login');
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
}

module.exports = controller;