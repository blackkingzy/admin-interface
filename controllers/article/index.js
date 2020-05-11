var fs = require('fs')
var path = require('path');

exports.create = function (req, res, next) {
    console.log(req.body)
    const params = {
        code: 20000,
        data: {
            result: true
        }
    }
    res.send(params)
}
//文章内图片上传
exports.imgUpload = function (req, res, next) {
    console.log(req.headers)
    // console.log(req.file);单文件
    console.log(req.files);
    // console.log(req.body);表单的其它构成在这里面
    //执行完中间件文件已经上传到服务器
    for (let file of req.files) {
        //path.parse()不仅仅是对路径分析，也可以对其他分析，来获取你想要的东西,比如这里
        const newName = file.path + path.parse(file.originalname).ext
        fs.renameSync(file.path, newName)//对于文件的操作一定得用fs
        file.filename += path.parse(file.originalname).ext
        file.path += path.parse(file.originalname).ext
    }
    const _baseurl = 'http://localhost:3001/';
    var url = path.join(_baseurl, req.files[0].path);
    res.send({
        code: 20000,
        msg: '成功',
        url: url
    })
}