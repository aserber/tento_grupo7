function authiMiddleware(req, res, next) {
	if (req.session.usuarioLogueado) {
        next()
	} else {
        res.redirect("./login");
    }

}

module.exports = authiMiddleware;

