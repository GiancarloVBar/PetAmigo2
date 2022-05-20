const LogoutController = {
    logout: (req, res) => {
        delete req.session.usuario;
        delete req.session.ong;
        res.redirect("/");
    }
}

module.exports = LogoutController;