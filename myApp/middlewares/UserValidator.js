function checkUserAuthenticated(req, res, next) {
    if (!(req.session.usuario || req.session.ong)) {
        return res.redirect("/login");
    }

    next()
}

function checkUserPermission(req, res, next) {
    const { id } = req.params

    if (!(req.session.usuario?.id == id || req.session.ong?.id == id)) {
        return res.redirect("/login");
    }

    next()
}

function checkIsUser(req, res, next) {
    if (!(req.session.usuario)) {
        return res.redirect("/login");
    }

    next()
}

function checkIsOng(req, res, next) {
    if (!(req.session.ong)) {
        return res.redirect("/login");
    }

    next()
}

module.exports = {checkUserAuthenticated, checkUserPermission, checkIsUser, checkIsOng};