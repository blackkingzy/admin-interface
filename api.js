const express = require('express');
const user = require('./controllers/user')
const table = require('./controllers/table')
const article = require('./controllers/article')
const role = require('./controllers/role')
const filter = require('./controllers/filter')
const multer = require('multer')


module.exports = function (parent) {
    const app = new express();
    //全局过滤器(好像只过滤http请求，对于ws请求不过滤，猜测)
    app.use(filter.userTokenVerify)
    //路由配置
    //这里可以分开模块配置，但接口较少先不分模块,这样看着很清晰
    //user模块
    app.get('/user/Info', user.getInfo)
    app.post('/user/login', user.login)
    app.post('/user/logout', user.logout)

    //table模块
    app.get('/table/list', table.getList)


    //article模块
    app.post('/article/create', article.create)
    //图片上传
    const upload = multer({ dest: './public/upload_images' })
    app.post('/article/imgUpload', upload.array('file', 10), article.imgUpload)
    //图片删除
    app.delete('/article/imgDelete', article.imgDelete)


    //role模块
    app.get('/getRoutes', role.getRoutes)
    parent.use(app)
}