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
}

module.exports = controller;