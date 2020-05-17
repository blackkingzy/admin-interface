const whiteList = ['/user/login', '/user/logout','/permission/getRoutes']
const token = require('../../utils/token')
exports.userTokenVerify = function (req, res, next) {
    //这里不仅要对某些全匹配接口放开，还要对图片请求放开
    if (whiteList.indexOf(req.originalUrl) !== -1 || req.originalUrl.indexOf('/upload_images') !== -1) {
        next()
    } else {
        const userToken = req.headers.authorization
        const result = token.verify(userToken)
        if (result.res) {
            // console.log('解析的数据', data)
            next()
        }
        else {
            const params = {
                code: 50008,
                message: 'Token expired'
            }
            res.send(params)
        }
    }
}