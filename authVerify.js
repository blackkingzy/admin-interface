
const jwt = require('jsonwebtoken')
const whiteList = ['/user/login', '/user/logout']
module.exports = function (req, res, next) {
    if (whiteList.indexOf(req.originalUrl) !== -1) {
        next()
    } else {
        const token = req.headers.authorization
        jwt.verify(token, "login", function (err, data) {
            if (err) {
                const params = { code: 50008 }
                res.send(params)
            }
            else {
                // console.log('解析的数据', data)
                next()
            }
        })
    }
}