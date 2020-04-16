const whiteList = ['/user/login', '/user/logout']
const token = require('../../utils/token')
exports.userTokenVerify = function (req, res, next) {
    if (whiteList.indexOf(req.originalUrl) !== -1) {
        next()
    } else {
        const userToken = req.headers.authorization
        const result = token.verify(userToken)
        if (result) {
            // console.log('解析的数据', data)
            next()
        }
        else {
            const params = { code: 50008 }
            res.send(params)
        }
    }
}