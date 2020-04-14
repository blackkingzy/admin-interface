const express = require('express');
const user = require('./controllers/user')
const table = require('./controllers/table')
const authVerify = require('./authVerify')


module.exports = function (parent) {
    const app = new express();

    app.all('/*', authVerify)
    //路由配置
    //这里可以分开模块配置，但接口较少先不分模块,这样看着很清晰
    //user模块
    app.get('/user/Info', user.getInfo)
    app.post('/user/login', user.login)
    app.post('/user/logout', user.logout)

    //table模块
    app.get('/table/list', table.getList)



    parent.use(app)
}