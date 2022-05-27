function checkUserAuthenticated(req, res, next) {
    if (!(req.session.usuario || req.session.ong)) {
        return res.status(401).send('Unauthorized')
    }

    next()
}

function checkUserPermission(req, res, next) {
    const { id } = req.params

    if (!(req.session.usuario?.id == id || req.session.ong?.id == id)) {
        return res.status(401).send('Unauthorized')
    }

    next()
}

function checkIsUser(req, res, next) {
    if (!(req.session.usuario)) {
        return res.status(401).send('Unauthorized')
    }

    next()
}

function checkIsOng(req, res, next) {
    if (!(req.session.ong)) {
        return res.status(401).send('Unauthorized')
    }

    next()
}

module.exports = {checkUserAuthenticated, checkUserPermission, checkIsUser, checkIsOng};