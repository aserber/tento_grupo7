function authMiddleware(req, res, next) {
	if (req.session.usuarioLogueado) {
        next()
	} else {
        res.render("/usuario/login");
    }

}

module.exports = authMiddleware;




