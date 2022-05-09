const LogoutController = {
    logout: (req, res) => {
        delete req.session.usuario;
        res.redirect("/");
    }
}

module.exports = LogoutController;