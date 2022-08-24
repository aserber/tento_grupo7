function authMiddleware(req, res, next) {
	if (req.session.usuarioLogueado) {
        next()
	} else {
        res.render("usuario/registro");
    }

}

module.exports = authMiddleware;




