const token = require('../../utils/token')

exports.login = function (req, res, next) {
    const userInfo = { name: 'admin', password: '123456' }
    const userToken = token.generate(userInfo)
    const params = {
        code: 20000,
        data: userToken
    }
    res.send(params)
}

exports.getInfo = function (req, res, next) {
    const params = {
        code: 20000,
        data: {
            roles: ["admin"],
            introduction: "I am a super administrator",
            avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            name: "Super Admin"
        }
    }
    res.send(params)
}

exports.logout = function (req, res, next) {
    const params = { code: 20000, data: "success" }
    res.send(params)
}
