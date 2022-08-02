function guestMiddleware(req, res, next){
    if (req.session.usuarioLogueado){
        return res.redirect("/");
    }
    next();
}

module.exports = guestMiddleware;